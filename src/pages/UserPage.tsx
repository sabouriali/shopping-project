function UserPage() {
  const user = sessionStorage.getItem("user");

  return (
    <>
      <h2 className="text-xl font-bold mb-4">حساب کاربری</h2>
      <p>{user} خوش آمدید</p>
    </>
  );
}

export default UserPage;
