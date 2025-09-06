import { useEffect, useState } from "react";
import { updateProduct, getProduct, deleteProduct } from "../data";
import Button from "./Button";
import Modal from "./modal";
import Swal from "sweetalert2";
import SearchBar from "./SearchBar";

export default function TableList() {
  const [product, setProduct] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({ name: "", description: "" });
  const [search, setSearch] = useState("");

  // TANGKAPDATA & TAMPILKAN
  async function fetchCategory() {
    const data = await getProduct();
    setProduct(data);
  }

  // TAMPILKAN DATA
  useEffect(() => {
    fetchCategory();
  }, []);

  // AMBIL DATA UPDATE
  function handleClickUpdate(item) {
    setSelectedProduct(item);
    setFormData({ name: item.name, description: item.description });
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  // UPDATE SAVE
  async function handleSaveUpdate() {
    if (!selectedProduct) return;
    await updateProduct(selectedProduct.id, formData);
    fetchCategory();
    document.querySelector("#myModal .btn-close").click();
  }

  // SWEET ALERT
  async function DeleteCategory(name, id) {
    const result = await Swal.fire({
      title: `Yakin ${name} hapus?`,
      text: "Data ini akan hilang permanen!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Gas, hapus!",
      cancelButtonText: "Batal",
    });

    if (result.isConfirmed) {
      await deleteProduct(id);
      fetchCategory();
      Swal.fire("Berhasil!", "Data berhasil dihapus.", "success");
    }
  }

  // FILTER
  const filteredProducts = product.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="mb-3">
        <SearchBar
          type="text"
          className="form-control"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          label="Search"
        />
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((item, index) => (
            <tr key={item.id}>
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <Button
                  Class="btn btn-success m-1"
                  title={<i className="bi bi-pencil"></i>}
                  onClick={() => handleClickUpdate(item)}
                  data-bs-toggle="modal"
                  data-bs-target="#myModal"
                  aria-label="Edit Product"
                />
                <Button
                  Class="btn btn-danger"
                  aria-label="Delete Product"
                  onClick={() => {
                    DeleteCategory(item.name, item.id);
                  }}
                  title={<i className="bi bi-trash3"></i>}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        handleSaveUpdate={handleSaveUpdate}
        formData={formData}
        handleChange={handleChange}
      />
    </>
  );
}
