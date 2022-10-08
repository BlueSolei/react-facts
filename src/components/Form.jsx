function Form() {
  return (
    <form>
      <label for="fname">First name:</label>
      <input type="text" size="1" id="fname" name="fname" />
      <label for="lname">Last name:</label>
      <input type="text" size="1" id="lname" name="lname" />
      <button type="button" size="1" id="button">Submit</button>
    </form>
  )
}

export default Form;