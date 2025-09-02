import { useState } from "react";
import "./App.css";

function EducationForm({
  handleshowEduForm,
  eduForm,
  handleEduChange,
  handleAddEdu,
}) {
  return (
    <form
      className="flex flex-col gap-5 mt-5 p-4 rounded-lg "
      style={{ backgroundColor: "#f7fafc" }}
      onSubmit={(e) => {
        e.preventDefault();
        handleshowEduForm();
        handleAddEdu(eduForm);
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

function ExperienceForm({
  handleshowExpForm,
  expForm,
  handleExpChange,
  handleAddExp,
}) {
  return (
    <form
      className="flex flex-col gap-5 mt-5 p-4 rounded-lg"
      style={{ backgroundColor: "#f7fafc" }}
      onSubmit={(e) => {
        e.preventDefault();
        handleshowExpForm();
        handleAddExp(expForm);
      }}
    >
      <label className="flex flex-col font-medium text-slate-800">
        Company Name
        <input
          type="text"
          name="company"
          value={expForm.company}
          onChange={handleExpChange}
          required
          className="p-2 rounded border border-slate-300 mt-1 focus:outline-none focus:ring-2 focus:ring-violet-400"
          placeholder="Enter company name"
        />
      </label>
      <label className="flex flex-col font-medium text-slate-800">
        Position Title
        <input
          type="text"
          name="position"
          value={expForm.position}
          onChange={handleExpChange}
          required
          className="p-2 rounded border border-slate-300 mt-1 focus:outline-none focus:ring-2 focus:ring-violet-400"
          placeholder="Enter position title"
        />
      </label>
      <label className="flex flex-col font-medium text-slate-800">
        Start Date
        <input
          type="date"
          name="startDate"
          value={expForm.startDate}
          onChange={handleExpChange}
          required
          className="p-2 rounded border border-slate-300 mt-1 focus:outline-none focus:ring-2 focus:ring-violet-400"
        />
      </label>
      <label className="flex flex-col font-medium text-slate-800">
        End Date
        <input
          type="date"
          name="endDate"
          value={expForm.endDate}
          onChange={handleExpChange}
          required
          className="p-2 rounded border border-slate-300 mt-1 focus:outline-none focus:ring-2 focus:ring-violet-400"
        />
      </label>
      <label className="flex flex-col font-medium text-slate-800">
        Location
        <input
          type="text"
          name="location"
          value={expForm.location}
          onChange={handleExpChange}
          required
          className="p-2 rounded border border-slate-300 mt-1 focus:outline-none focus:ring-2 focus:ring-violet-400"
          placeholder="Enter location"
        />
      </label>
      <label className="flex flex-col font-medium text-slate-800">
        Description
        <input
          type="text"
          name="description"
          value={expForm.description}
          onChange={handleExpChange}
          required
          className="p-2 rounded border border-slate-300 mt-1 focus:outline-none focus:ring-2 focus:ring-violet-400"
          placeholder="Enter description"
        />
      </label>
      <div className="flex gap-3 mt-2">
        <button
          type="submit"
          className="bg-violet-500 text-white px-4 py-2 rounded hover:bg-violet-600"
        >
          Save
        </button>
        <button
          type="button"
          className="bg-slate-300 text-slate-800 px-4 py-2 rounded hover:bg-slate-400"
          onClick={handleshowExpForm}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

function EduItem({ edu,deleteeduItem }) {
  return (
    <div
      className="border border-slate-300 rounded-lg p-2 flex justify-between"
      style={{ backgroundColor: "#d5d9eb" }}
    >
      <div className="eduDetail">
        <h3 className="text-[1 rem] font-semibold text-slate-800">{edu.degree}</h3>
        <p className="text-slate-600">{edu.school}</p>
      </div>

      <button
        className="bg-red-500 text-[1rem] text-white px-4 rounded hover:bg-red-600 transition-colors hover:cursor-pointer"
        onClick={() => {
         deleteeduItem(edu);
        }}
      >
        Delete
      </button>
    </div>
  );
}

function ExpItem({ exp,deleteexpItem }) {
  return (
    <div
      className="border border-slate-300 rounded-lg p-2 flex justify-between"
      style={{ backgroundColor: "#d5d9eb" }}
    >
      <div className="expDetail">
        <h3 className="text-[1 rem] font-semibold text-slate-800">{exp.position}</h3>
        <p className="text-slate-600">{exp.company}</p>
      </div>

      <button
        className="bg-red-500 text-[1rem] text-white px-4 rounded hover:bg-red-600 transition-colors hover:cursor-pointer"
        onClick={() => {
         deleteexpItem(exp);
        }}
      >
        Delete
      </button>
    </div>
  );
}

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [eduList, setEduList] = useState([]);
  const [expList, setExpList] = useState([]);

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

  const [expForm, setExpForm] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });

  const [showExpForm, setShowExpForm] = useState(false);

  const handleExpChange = (e) => {
    const { name, value } = e.target;
    setExpForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleshowExpForm = () => {
    setShowExpForm(false);
  };

  const handleAddExp = (expForm) => {
    setExpList((prev) => [...prev, expForm]);
    setExpForm({
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
    setShowExpForm(false);
  };

  const deleteeduItem  = (edu) => {
    const index = eduList.indexOf(edu);
    if (index > -1) {
      eduList.splice(index, 1);
      setEduList([...eduList]);
    }
    console.log(eduList);
  }

  const deleteexpItem = (exp) => {  
    const index = expList.indexOf(exp);
    if (index > -1) {
      expList.splice(index, 1);
      setExpList([...expList]);
    }
    console.log(expList);
  }

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
            style={{ backgroundColor: "#f7fafc" }}
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

            {showEduForm && (
              <EducationForm
                handleshowEduForm={handleshowEduForm}
                eduForm={eduForm}
                handleEduChange={handleEduChange}
                handleAddEdu={handleAddEdu}
              />
            )}

            {/* ADD EDUCATION ENDS  */}

            {eduList.map((edu, index) => {
              return <EduItem key={index} edu={edu} deleteeduItem = {deleteeduItem} />;
            })}
          </div>
          {/* EDUCATION DETAILS FORM ENDS HERE */}

          {/* EXPERIENCE DETAILS FORM STARTS HERE */}

          <div className="experienceDetails  flex flex-col gap-5 mt-5 p-4 rounded-lg ">
            <h2 className="text-2xl">Experience</h2>

            <button
              type="button"
              className="bg-violet-500 text-white px-4 py-2  hover:bg-violet-600 w-[100%] rounded-lg hover:cursor-pointer"
              onClick={() => setShowExpForm(true)}
            >
              Add Experience
            </button>

            {/* ADD EXPERIENCE STARTS  */}

            {showExpForm && (
              <ExperienceForm
                handleshowExpForm={handleshowExpForm}
                expForm={expForm}
                handleExpChange={handleExpChange}
                handleAddExp={handleAddExp}
              />
            )}

            {/* ADD EXPERIENCE ENDS  */}

            {expList.map((exp, index) => {
              return <ExpItem key={index} exp={exp} deleteexpItem = {deleteexpItem} />;
            })}
          </div>
          {/* EXPERIENCE DETAILS FORM ENDS HERE  */}
        </div>
      </div>
    </>
  );
}

export default App;
