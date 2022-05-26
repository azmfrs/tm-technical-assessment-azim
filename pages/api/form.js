export default function handler(req, res) {
    const body = req.body
    console.log('body: ', body)

    if (!body.name || !body.email || !body.mobile) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ data: 'All fields are mandatory' })
    }
  
    // Sends a HTTP success code
    res.status(200).json({ data: `Name: ${body.name} Email: ${body.email} Mobile: ${body.mobile}` })
  }