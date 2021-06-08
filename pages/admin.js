import React, { useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Menu from "./components/admin/Menu";
import { useRouter } from "next/router";
export default function admin() {
  const router = useRouter();
  const [topic, setTopic] = useState({ topic: "" });
  const onSubmitTopic = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/admin/group", topic)
      .then((result) => {
        alert("บันทึกข้อมูลเรียบร้อย");
        router.push("/editdeletegroup");
      })
      .catch((result) => console.log(result));
  };
  return (
    //test1234444
    <div>
      <Navbar />
      <div className="row mt-4">
        <div className="col-md-3">
          <div className="container">
            <Menu />
          </div>
        </div>
        <div className="col-md-8 ">
          <div className="container">
            <h4 className="mb-3">Add Group</h4>
            <form onSubmit={onSubmitTopic}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="topic"
                  placeholder="Group"
                  onChange={(e) => setTopic({ topic: e.target.value })}
                />
                <button className="btn btn-outline-success mt-3 btn-sm">
                  ADD
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
