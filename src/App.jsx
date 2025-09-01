import { useState } from "react";
import "./App.css";

function EducationForm({handleshowEduForm,eduForm,handleEduChange,handleAddEdu}) {
  return (
    <form
      className="flex flex-col gap-4 mt-4 bg-slate-100 p-4 rounded shadow"
      onSubmit={(e) => {
        e.preventDefault();
        handleshowEduForm();
      }}
    >
      <label className="flex flex-col font-medium text-slate-800">
        School
        <input
          type="text"
          name="school"
          value={eduForm.school}
          onChange={(e) => handleEduChange(e)}
          required
          className="p-2 rounded border border-slate-300 mt-1 focus:outline-none focus:ring-2 focus:ring-violet-400"
          placeholder="Enter school name"
        />
      </label>
      <label className="flex flex-col font-medium text-slate-800">
        Degree
        <input
          type="text"
          name="degree"
          value={eduForm.degree}
          onChange={(e) => handleEduChange(e)}
          required
          className="p-2 rounded border border-slate-300 mt-1 focus:outline-none focus:ring-2 focus:ring-violet-400"
          placeholder="Enter degree"
        />
      </label>
      <label className="flex flex-col font-medium text-slate-800">
        Start Date
        <input
          type="date"
          name="startDate"
          value={eduForm.startDate}
          onChange={(e) => handleEduChange(e)}
          required
          className="p-2 rounded border border-slate-300 mt-1 focus:outline-none focus:ring-2 focus:ring-violet-400"
        />
      </label>
      <label className="flex flex-col font-medium text-slate-800">
        End Date
        <input
          type="date"
          name="endDate"
          value={eduForm.endDate}
          onChange={(e) => handleEduChange(e)}
          required
          className="p-2 rounded border border-slate-300 mt-1 focus:outline-none focus:ring-2 focus:ring-violet-400"
        />
      </label>
      <label className="flex flex-col font-medium text-slate-800">
        Location
        <input
          type="text"
          name="location"
          value={eduForm.location}
          onChange={(e) => handleEduChange(e)}
          required
          className="p-2 rounded border border-slate-300 mt-1 focus:outline-none focus:ring-2 focus:ring-violet-400"
          placeholder="Enter location"
        />
      </label>
      <div className="flex gap-3 mt-2">
        <button
          type="submit"
          className="bg-violet-500 text-white px-4 py-2 rounded hover:bg-violet-600"
        >
          Add
        </button>
        <button
          type="button"
          className="bg-slate-300 text-slate-800 px-4 py-2 rounded hover:bg-slate-400"
          onClick={() => handleshowEduForm()}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [eduList, setEduList] = useState([]);

  const [showEduForm, setShowEduForm] = useState(false);
  const [eduForm, setEduForm] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  const handleEduChange = (e) => {
    const { name, value } = e.target;
    setEduForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleshowEduForm = () => {
    setShowEduForm(false);
  };

  const handleAddEdu = (eduForm) => {
    setEduList((prev) => [...prev, eduForm]);
    setEduForm({
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    });
    setShowEduForm(false);
  };

  return (
    <>
      <div className="my-container max-w-[1300px] mx-auto bg-slate-50 h-screen">
        {/* LEFT SECTION START HERE */}
        <div className="inputForms overflow-auto bg-white p-4.5 shadow-md">
          <h1
            className="text-3xl text-center mt-2.5 font-bold"
            style={{ color: "rgb(45, 55, 72)" }}
          >
            CV Builder
          </h1>

          {/* PERSONAL DETAILS FORM STARTS HERE */}

          <form
            onSubmit={(e) => e.preventDefault()}
            className="personalDetails flex flex-col gap-5 mt-5 p-4 rounded-lg "
          >
            <h2 className="text-2xl">Personal Details</h2>
            <label className="flex flex-col text-slate-800 font-medium">
              Full Name
              <input
                type="text"
                name="fullName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 rounded border border-slate-300 mt-1 focus:outline-none focus:ring-2 focus:ring-violet-400"
                placeholder="Enter your full name"
              />
            </label>
            <label className="flex flex-col text-slate-800 font-medium">
              Email
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 rounded border border-slate-300 mt-1 focus:outline-none focus:ring-2 focus:ring-violet-400"
                placeholder="Enter your email"
              />
            </label>
            <label className="flex flex-col text-slate-800 font-medium">
              Phone
              <input
                type="tel"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="p-2 rounded border border-slate-300 mt-1 focus:outline-none focus:ring-2 focus:ring-violet-400"
                placeholder="Enter your phone number"
              />
            </label>
            <label className="flex flex-col text-slate-800 font-medium">
              Address
              <input
                type="text"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="p-2 rounded border border-slate-300 mt-1 focus:outline-none focus:ring-2 focus:ring-violet-400"
                placeholder="Enter your address"
              />
            </label>
          </form>

          {/* PERSONAL DETAILS FORM ENDS HERE  */}

          {/* EDUCATION DETAILS FORM STARTS HERE */}

          <div className="educationDetails flex flex-col gap-5 mt-5 p-4 rounded-lg ">
            <h2 className="text-2xl">Education</h2>

            <button
              type="button"
              className="bg-violet-500 text-white px-4 py-2  hover:bg-violet-600 w-[100%] rounded-lg hover:cursor-pointer"
              onClick={() => setShowEduForm(true)}
            >
              Add Education
            </button>

            {/* ADD EDUCATION STARTS  */}

            {showEduForm && <EducationForm handleshowEduForm={handleshowEduForm} eduForm={eduForm} handleEduChange={handleEduChange} handleAddEdu={handleAddEdu} />}

            {/* ADD EDUCATION ENDS  */}
          </div>
          {/* EDUCATION DETAILS FORM ENDS HERE */}
        </div>
        <div className="cvPreview overflow-auto bg-violet-400 shadow-md"></div>
      </div>
    </>
  );
}

export default App;
