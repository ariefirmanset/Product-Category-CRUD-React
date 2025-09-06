import Button from "./Button";
import Forms from "./Form";
import FormInput from "./FormInput";
import FormTextAreas from "./FormTextAreas";
import Title from "./Title";

export default function Modal({ handleSaveUpdate, formData, handleChange }) {
  return (
    <div
      className="modal fade"
      id="myModal"
      tabIndex="-1"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <Title
              title="Update Product"
              className="modal-title fs-5"
              id="myModalLabel"
            ></Title>
            <Button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></Button>
          </div>
          <div className="modal-body">
            <Forms>
              <FormInput
                id="name"
                label="Name Product"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                placeholder="example: Samsung"
              />
              <FormTextAreas
                id="description"
                label="Description"
                className="form-control"
                value={formData.description}
                onChange={handleChange}
                placeholder="description"
              />
            </Forms>
          </div>
          <div className="modal-footer">
            <Button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              title="Close"
            ></Button>
            <Button
              type="button"
              className="btn btn-primary"
              onClick={handleSaveUpdate}
              title="Save"
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
