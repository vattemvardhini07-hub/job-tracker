import "./index.css"
import {useState} from "react"

const Profile = () => {
  const [profileData, setProfileData] = useState({
  fullName: "",
  email: "",
  phone: "",
  location: "",
  qualification: "",
  college: "",
  graduationYear: "",
  skills: "",
  role: "",
  company: "",
  experience: ""
})
const onSaveProfile = (event) => {
  event.preventDefault()

  localStorage.setItem("userProfile", JSON.stringify(profileData))
}
  return (
   <div className="profile-container">
  <div className="profile-header">
    <h1>My Profile</h1>
    <p>Manage your personal and professional information.</p>
  </div>

  <form className="profile-form" onSubmit={onSaveProfile}>
    <div className="form-section">
      <h2>Personal Information</h2>
      <div className="form-grid">
      <div className="input-group">
        <label>Full Name</label>
        <input
        type="text"
        placeholder="Enter your full name"
        value={profileData.fullName}
        onChange={(event) =>
          setProfileData({
            ...profileData,
            fullName: event.target.value
          })
  }
/>
      </div>

      <div className="input-group">
        <label>Email Address</label>
        <input
        type="email"
        placeholder="Enter your email"
        value={profileData.email}
        onChange={(event) =>
          setProfileData({
            ...profileData,
            email: event.target.value
          })
        }
/>
      </div>

      <div className="input-group">
        <label>Phone Number</label>
        <input
        type="tel"
        placeholder="Enter your phone number"
        value={profileData.phone}
        onChange={(event) =>
          setProfileData({
            ...profileData,
            phone: event.target.value
          })
        }
/>
      </div>

      <div className="input-group">
        <label>Location</label>
        <input
        type="text"
        placeholder="Enter your location"
        value={profileData.location}
        onChange={(event) =>
          setProfileData({
            ...profileData,
            location: event.target.value
          })
        }
      />
      </div>
    </div>
        </div>

    <div className="form-section">
      <h2>Education & Skills</h2>
      <div className="form-grid">
  <div className="input-group">
    <label>Highest Qualification</label>
    <input type="text"
    value={profileData.qualification}
onChange={(event) =>
  setProfileData({
    ...profileData,
    qualification: event.target.value
  })
}/>
  </div>

  <div className="input-group">
    <label>College / University</label>
    <input type="text" placeholder="Enter college name" 
    value={profileData.college} 
    onChange={(event) =>
  setProfileData({
    ...profileData,
    college: event.target.value
  })
}/>
  </div>

  <div className="input-group">
    <label>Graduation Year</label>
    <input type="number" placeholder="e.g. 2027" value={profileData.graduationYear}
     onChange={(event) =>
  setProfileData({
    ...profileData,
    graduationYear: event.target.value
  })
   
}/>
    
  </div>

  <div className="input-group">
    <label>Technical Skills</label>
    <textarea placeholder="e.g. React, JavaScript, Python..." rows="3" value={profileData.skills} 
     onChange={(event) =>
  setProfileData({
    ...profileData,
    skills: event.target.value
  })
}
    />
  </div>
</div>
    </div>

    <div className="form-section">
      <h2>Professional Experience</h2>
      <div className="form-grid">
  <div className="input-group">
    <label>Current / Recent Role</label>
    <input type="text" placeholder="e.g. Frontend Developer Intern" value={profileData.role} 
    onChange={(event) => 
      setProfileData({
        ...profileData,
        role:event.target.value
      })
    }
    />
  </div>

  <div className="input-group">
    <label>Company Name</label>
    <input type="text" placeholder="Enter company name" value={profileData.company}
    onChange={(event) => 
      setProfileData({
        ...profileData,
        company:event.target.value
      })
    }
    />
  </div>

  <div className="input-group full-width">
    <label>Work Experience</label>
    <textarea
      placeholder="Describe your experience, projects and responsibilities..."
      rows="4" value={profileData.experience}
       onChange={(event) => 
      setProfileData({
        ...profileData,
        experience:event.target.value
      })
    }

    />
  </div>
</div>
    </div>

    <button type="submit">Save Profile</button>
  </form>
</div>
  )
}

export default Profile