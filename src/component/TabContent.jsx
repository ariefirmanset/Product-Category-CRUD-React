// TabContent.jsx
import Table from "./TableList.jsx"
import Title from "./Title.jsx"
import Form from "./CreateForm.jsx"

export default function TabContent({ selected, onSuccess }) {
  if (selected === "list") {
    return (
      <div id="tab-content">
        <Title title="List Data Product" />
        <Table />
      </div>
    )
  }

  if (selected === "create") {
    return (
      <div id="tab-content">
        <Title title="Create Data" />
        <Form onSuccess={onSuccess} />
      </div>
    )
  }

  return <p>Please Select Topic</p>
}
