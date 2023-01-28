import React from 'react'

function Contacts() {
  return (
   <div className="contact">
    <main>
<h1>Contacs us </h1>
<form>
<div>
<label>Name</label>
<input type="text"  required placeholder="Abc" />
</div>


<div>
<label>Email</label>
<input type="email"  required placeholder="Abc@xyz" />
</div>

<div>
<label>Message</label>
<input type="text"  required placeholder="tell us about" />
</div>

<button type="submit">Send</button>
</form>


    </main>




   </div>
  )
}

export default  Contacts;