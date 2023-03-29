

const ContactUs = () => {

  return (
    <body>
      <form action="">
        <div>
            <label for="your name">Your Name</label>
            <input type="text" />
        </div>
        <div>
            <label for="your name">Email</label>
            <input type="text" />
        </div>
        <div>
            <label for="your name">Title</label>
            <input type="text" />
        </div>
        <div>
            <label for="your name">Body</label>
            <input type="text" />
        </div>
        <button class="button-pushable" id="next">
                    <span class="button-shadow"></span>
                    <span class="button-edge"></span>
                    <span class="button-front text">
                    Send via Email!
                    </span>
                </button>
      </form>
    </body>
  );
};

export default ContactUs;
