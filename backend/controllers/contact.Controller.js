

// backend/controllers/contact.Controller.js


// ================================= backend code while using nodemailer to send mail ============================================
// import nodemailer from 'nodemailer';
// import {Resend} from 'resend';


// export async function sendContactEmail(req, res) {
//     try {
//         const { name, email, message } = req.body;

//         if (!name || !email || !message) {
//             return res.status(400).json({ success: false, message: "All form fields are required." });
//         }

//         // Initialize transporter dynamically so process.env values are fully loaded
//         const transporter = nodemailer.createTransport({
//             // service: 'gmail',
//             host: 'smtp.gmail.com',
//             port: 465,
//             family: 4,
//             secure: true,
//             auth: {
//                 user: process.env.EMAIL_USER,
//                 pass: process.env.EMAIL_PASS
//             }
//         });

//         const mailOptions = {
//             from: `"${name} (Portfolio Form)" <${process.env.EMAIL_USER}>`,
//             to: process.env.EMAIL_USER,
//             replyTo: email,
//             subject: `💼 New Portfolio Message from ${name}`,
//             html: `
//                 <div style="font-family: sans-serif; padding: 20px; color: #333; border: 1px solid #e5e4e7; border-radius: 12px; max-width: 600px;">
//                     <h2 style="color: #aa3bff; margin-top: 0;">New Contact Form Submission</h2>
//                     <p><strong>Name:</strong> ${name}</p>
//                     <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
//                     <hr style="border: 0; border-top: 1px solid #e5e4e7; margin: 20px 0;" />
//                     <p><strong>Message:</strong></p>
//                     <div style="background-color: #f4f3ec; padding: 15px; border-radius: 8px; font-style: italic;">
//                         "${message}"
//                     </div>
//                 </div>
//             `
//         };

//         await transporter.sendMail(mailOptions);
//         return res.status(200).json({ success: true, message: "Email sent successfully!" });
//     } catch (error) {
//         console.error("Nodemailer error details:", error);
//         return res.status(500).json({ success: false, error: error.message });
//     }
// }






// ================================ backend code while using resend to send mail ============================================

// import { Resend } from 'resend';

// const resend = new Resend(process.env.EMAIL_PASS);

// export async function sendContactEmail(req, res) {
//     try {
//         const { name, email, message } = req.body;
        
//         if (!name || !email || !message) {
//             return res.status(400).json({ success: false, message: "All form fields are required." });
//         }


//         // Sends email over HTTPS (Port 443) which works seamlessly on Render Free Tier
//         const mail = await resend.emails.send({
//             from: `Portfolio Contact <contact@devstriks.is-a.dev>`,
//             to: [process.env.EMAIL_USER], // Delivers to target email in Render environment variables
//             replyTo: email,              // Recruiter's email address entered in the form
//             subject: `💼 New Portfolio Message from ${name}`,
//             html: `
//                 <div style="font-family: sans-serif; padding: 20px; color: #333; border: 1px solid #e5e4e7; border-radius: 12px; max-width: 600px;">
//                     <h2 style="color: #aa3bff; margin-top: 0;">New Contact Form Submission</h2>
//                     <p><strong>Name:</strong> ${name}</p>
//                     <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
//                     <hr style="border: 0; border-top: 1px solid #e5e4e7; margin: 20px 0;" />
//                     <p><strong>Message:</strong></p>
//                     <div style="background-color: #f4f3ec; padding: 15px; border-radius: 8px; font-style: italic;">
//                         "${message}"
//                     </div>
//                 </div>
//             `
//         });

//         return res.status(200).json({ success: true, message: "Email sent successfully!", mail });
//     } catch (error) {
//         console.error("Resend error details:", error);
//         return res.status(500).json({ success: false, error: error.message });
//     }
// }






// jhon
// jhon1@gmail.com
// hello 