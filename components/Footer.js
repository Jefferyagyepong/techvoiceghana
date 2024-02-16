

export default function Footer() {
  return (
    <footer>
      <h5>Subscibe to Our Newsletter 📃</h5>
          <form>
              <label for="email">Email</label>
              <input type="email" name="email" />
              <button type="submit">submit</button>
          </form>
    

      <h6>All rights Reserved &copy; TechVoice 🇬🇭 {new Date().getFullYear()}</h6>
    </footer>
  );
}
