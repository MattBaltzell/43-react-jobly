import React from "react";

const UpdateProfileForm = () => {
  return (
    <main>
      <h1>Profile</h1>
      <form>
        <label>Username</label>
        <input disabled type="text" placeholder="actual username" />

        <label>First name</label>
        <input type="text" placeholder="actual first name" />
        <label>Last name</label>
        <input type="text" placeholder="actual last name" />
        <label>Email</label>
        <input type="email" placeholder="actual email" />
        <button>Save Changes</button>
      </form>
    </main>
  );
};

export default UpdateProfileForm;
