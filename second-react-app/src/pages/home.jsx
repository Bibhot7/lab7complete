

export default function Homepage() {

  let email = '';
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reloading on form submit
    // console.log('e.target.email', e.target.email);
    const data = new FormData(e.target);
    const formObject = Object.fromEntries(data.entries());
    handleUpdateUser({ email: formObject.email });
  };
  return (
    <>
      <div className="Homepage">
        <h1>Home</h1>
  
        
        <div className="LoginForm componentBox">
          <form onSubmit={handleSubmit}>
            <div className="formRow">
              <label>
                Email Address:
                <input type="email" defaultValue={email} name="email" />
              </label>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
