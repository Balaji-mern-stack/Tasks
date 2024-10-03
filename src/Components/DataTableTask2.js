import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { BsTrash, BsPencil } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function DataTableTask2() {
  const [details, setDetails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://catodotest.elevadosoftwares.com/Client/GetAllClientDetails")
      .then(res => {
        setDetails(res.data.clientList);
      });
  }, []);

  async function handleDelete(id) {
    const { value: text } = await Swal.fire({
      input: "textarea",
      inputLabel: "Message",
      inputPlaceholder: "Type your message here...",
      inputAttributes: {
        "aria-label": "Type your message here"
      },
      showCancelButton: true
    });

    if (text) {
      const data = {
        clientId: id,
        removedRemarks: text,
        createdBy: 1
      };
      axios.post("http://catodotest.elevadosoftwares.com/Client/RemoveClient", data)
        .then(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Client has been deleted",
            showConfirmButton: false,
            timer: 1500
          });
          setDetails(details.filter(detail => detail.clientId !== id)); 
        });
    }
  }

  function handleEdit(row) {
    navigate(`/edit-client/${row.clientId}`);
  }

  const columns = [{
    name: "clientId",
    selector: row => row.clientId
  }, {
    name: "clientName",
    selector: row => row.clientName
  }, {
    name: "phone",
    selector: row => row.phone
  }, {
    name: "address",
    selector: row => row.address
  }, {
    name: "gst",
    selector: row => row.gst
  }, {
    name: "website",
    selector: row => row.website
  }, {
    name: "email",
    selector: row => row.email
  }, {
    name: "contactPerson",
    selector: row => row.contactPerson
  }, {
    name: "phoneNumber",
    selector: row => row.phoneNumber
  }, {
    name: "createdBy",
    selector: row => row.createdBy
  }, {
    name: "Actions",
    cell: row => (
      <div>
        <Button onClick={() => handleEdit(row)}>
          <BsPencil />
        </Button>
        <Button onClick={() => handleDelete(row.clientId)}>
          <BsTrash />
        </Button>
      </div>
    )
  }];

  return (
    <div>
      <Button onClick={() => navigate("/edit-client/:id")}>Add Details</Button>
      <DataTable
        columns={columns}
        data={details}
      />
    </div>
  );
}

export default DataTableTask2;
