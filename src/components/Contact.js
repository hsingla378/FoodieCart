const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
      <form className="flex flex-col m-auto max-w-96">
        <input
          type="text"
          placeholder="name"
          className="border border-black p-2 m-2"
        />
        <input
          type="text"
          placeholder="message"
          className="border border-black p-2 m-2"
        />
        <button className="border border-black p-2 m-2 bg-black text-white rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
