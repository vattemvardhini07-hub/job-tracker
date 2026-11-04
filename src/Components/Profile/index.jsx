import "./index.css"
import {useState} from "react"

const Profile = () => {
  const [isSaved, setIsSaved] = useState(false)
  const [isEditing, setIsEditing] = useState(() => {
  return localStorage.getItem("userProfile") === null
})

const [isSaving, setIsSaving] = useState(false)

const [showSavedPopup, setShowSavedPopup] = useState(false)
  const [profileData, setProfileData] = useState(() => {
  const savedProfile = localStorage.getItem("userProfile")

  if (savedProfile !== null) {
    return JSON.parse(savedProfile)
  }

return {
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
}
})
const onSaveProfile = (event) => {
  event.preventDefault()

  setIsSaving(true)

  setTimeout(() => {

    localStorage.setItem("userProfile", JSON.stringify(profileData))

    setIsSaving(false)
    setShowSavedPopup(true)
    setIsEditing(false)
    setTimeout(() => {
      setShowSavedPopup(false)
    }, 2500)


  }, 2000)
}
  return (
   <div className="profile-container">
 <div className="profile-header">
  <div>
    <h1>My Profile</h1>
    <p>Manage your personal and professional information.</p>
  </div>

  {!isEditing && (
    <button type="button" onClick={() => setIsEditing(true)}>
      Edit Profile
    </button>
  )}
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
        disabled={!isEditing}
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
        disabled={!isEditing}
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
        disabled={!isEditing}
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
        disabled={!isEditing}
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
    disabled={!isEditing}
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
    disabled={!isEditing}
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
    disabled={!isEditing}
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
    disabled={!isEditing}
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
    disabled={!isEditing}
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
    disabled={!isEditing}
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
      disabled={!isEditing}
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

   <button type="submit" disabled={isSaving}>
  {isSaving ? "Saving..." : "Save Profile"}
</button>
  </form>
  {showSavedPopup && (
  <div className="success-popup">
    <span>✓</span>
    Profile saved successfully!
  </div>
)}
</div>
  )
}

export default Profile