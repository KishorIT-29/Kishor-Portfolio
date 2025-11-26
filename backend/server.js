const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  if(!name || !email || !message) return res.status(400).json({ error: 'Missing fields' });

  // If RESEND_API_KEY and RESEND_TO_EMAIL are set, attempt to send via Resend
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const TO = process.env.RESEND_TO_EMAIL;
  if(RESEND_API_KEY && TO){
    try{
      const body = {
        from: 'portfolio@yourdomain.com',
        to: TO,
        subject: `Message from ${name}`,
        plain_text: `${message}\n\nReply to: ${email}`
      };
      const r = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Content-Type':'application/json', 'Authorization':`Bearer ${RESEND_API_KEY}` },
        body: JSON.stringify({ from: body.from, to: body.to, subject: body.subject, plain_text: body.plain_text })
      });
      if(!r.ok) {
        const txt = await r.text();
        return res.status(500).json({ error: 'Failed to send', details: txt });
      }
      return res.json({ ok: true });
    }catch(err){
      console.error(err);
      return res.status(500).json({ error:'Server error' });
    }
  }

  // Otherwise just log and return ok for testing
  console.log('Contact received:', { name, email, message });
  return res.json({ ok:true, note: 'Email not sent — set RESEND_API_KEY to send' });
});

const port = process.env.PORT || 4000;
app.listen(port, ()=> console.log('Backend running on', port));
