const EmailLogin = () => {
  return (
    <form action="" className="flex flex-col gap-2 mb-2">
      <input type="text" placeholder="Email" className="rounded-xl py-2 px-3" />
      <input
        type="text"
        placeholder="Password"
        className="rounded-xl py-2 px-3"
      />
    </form>
  );
};

export default EmailLogin;
