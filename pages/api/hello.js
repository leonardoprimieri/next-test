// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({ name: 'John Doe' });
};

export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log('post', req)
  } else {
    // Handle any other HTTP method
  }
}