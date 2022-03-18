function Test () {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/page" element={<Page />} />
      </Routes>

      <Link to="/">home</Link>
      | <Link to="/user">user</Link>
      | <Link to="/page">page</Link>
    </div>
  );
}