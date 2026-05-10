function Header({ search, onSearchChange }) {
  return (
    <header>
      <h1>Plantshop</h1>

      {/* Search input that filters plants by name */}
      <input
        type="text"
        placeholder="Type a name to search..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </header>
  );
}

export default Header;