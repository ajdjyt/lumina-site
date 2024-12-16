import nodemailer from 'nodemailer';
import mg from 'nodemailer-mailgun-transport';
// import { fail } from '@sveltejs/kit';

const apiKey = process.env.mailgun_key;
const domain = process.env.mailgun_mail_domain;
const recipient = process.env.mailgun_mail_recipient;
const maxSize = 8*1024*1024; // 8MB
const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

// console.log(recipient);

if (!recipient){
	throw new Error('Mailgun recipient is not set in environment')
}

if (!apiKey || !domain) {
	throw new Error('Mailgun API key or domain is not set in environment');
}
const auth = {
	auth: {
		api_key: apiKey,
		domain: domain
	}
};

const nodemailerMailgun = nodemailer.createTransport(mg(auth));

export const POST = async ({ request }: { request: Request }) => {
	const data = await request.formData();

	const userEmail = data.get('userEmail') as string;
	const userName = data.get('userName') as string;
	const userTeam = data.get('userTeam') as string;
	const userResume = data.get('userResume') as File;

	if (!userEmail || !userName || !userTeam || !userResume) {
		// console.log(userEmail, userName, userTeam, userResume);
		console.log("Missing fields");
		return new Response(JSON.stringify({ error: 'Missing required form fields' }), {
			status: 400,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
	
	if (userResume.size > maxSize) {
		console.log("File too big");
		return new Response(JSON.stringify({ error: `File size exceeds the ${maxSize / 1024 / 1024}MB limit` }), {
			status: 400,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
  
	if (!allowedTypes.includes(userResume.type)) {
		console.log("Wrong file type");
		return new Response(JSON.stringify({ error: 'Invalid file type. Only PDF and DOCX are allowed.' }), {
			status: 400,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}

	const fileBuffer = Buffer.from(await userResume.arrayBuffer());

	const mail = `mailer@${domain}`;
	

	try {
		const info = await nodemailerMailgun.sendMail({
			from: mail,
			to: recipient,
			subject: `Received Application from ${userName}`,
			text: `Application from ${userName} for ${userTeam} \nMail: ${userEmail}`,
			attachments: [
				{
				  filename: userResume.name,
				  content: fileBuffer,
				  encoding: 'base64',
				}
			  ]
		});
		console.log(`Email sent: ${info.messageId}`);
		return new Response(
			JSON.stringify({ success: true, message: `Email sent: ${info.messageId}` }),
			{ status: 200 }
		);
	} catch (error) {
		if (error instanceof Error) {
			console.log(`Error sending email: ${error.message || error}`, error.stack);
		} else {
			console.log(`Error sending email: ${error}`);
		}
		return new Response(JSON.stringify({ error: 'Failed to send email. Please contact us directly.' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
};
