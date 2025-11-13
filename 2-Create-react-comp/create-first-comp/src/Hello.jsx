function Hello() {
  let myname = "Rajan";
  let fullName = () => {
    return " Rajan kumar";
  };
  let number = 56;
  return (
    <h3>
      Hello {fullName()} Your message Number is: {number} " "{myname}
    </h3>
  );
}
export default Hello;
