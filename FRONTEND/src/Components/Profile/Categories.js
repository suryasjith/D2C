</div>
<div className="form-group">
  <input
    onChange={handleChange("price")}
    type="number"
    className="form-control"
    placeholder="Price"
    value={price}
  />
</div>
<div className="form-group">
  <select
    onChange={handleChange("category")}
    className="form-control"
    placeholder="Category"
  >
    <option>Select</option>
    <option value="a">a</option>
    <option value="b">b</option>
  </select>
</div>
<div className="form-group">
  <input
    onChange={handleChange("quantity")}
    type="number"
    className="form-control"
    placeholder="Quantity"
    value={stock}
  />
</div>

<button type="submit" onClick={onSubmit} className="btn btn-outline-success">
  Create Product
</button>
</form>
);