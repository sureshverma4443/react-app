import "./profile.css";
import DisplayObjectData from "../../components/common/Displayobject/Displayobject";

const profileobj = {
  Header: "Profile",

  personal_Details: {
    firstname: "Rahul",
    lastname: "kumar",
    age: 25,
    gender: "Male",
  },

  Contact: {
    email: "rahul4567@gmail.com",
    mobile: 4987412115,
    address: "delhi",
    pincode: 302015,
  },
  Education: {
    degree: "Btech",
    college: "IIT",
    percentage: 85,
    grade: "A",
  },
  Interest: {
    hobby: "Cricket",
    film: "Bollywood",
    music: "Singing",
    movie: "Action",
  },
};

const Profile = () => {
  console.log(Object.keys(profileobj.personal_Details));
  return (
    <div className="profile">
      {/* <h1>{profileobj.Header}</h1>
        <div className="profile_container"p>
            <div>
                <h2>Personal Details</h2>
                {Object.keys(profileobj.personal_Details).map(attr=>{
                    return(
                        <div>
                            <label>{attr}</label>
                            <span>: {profileobj.personal_Details[attr]}</span>
                        </div>
                    )
                })}
            </div>
            <div>
                <h2>education Details</h2>
                {Object.keys(profileobj.education).map(attr=>{
                    return(
                        <div>
                            <label>{attr}</label>
                            <span>: {profileobj.education[attr]}</span>
                        </div>
                    )
                })}
            </div>
        </div> */}

      <h1>{profileobj.Header}</h1>

      <div className="profile-container">
        <DisplayObjectData title="Personal Details" dataobj={profileobj.personal_Details}/>
        <DisplayObjectData title="Contact "dataobj={profileobj.Contact}/>
        <DisplayObjectData title="Education" dataobj={profileobj.Education} />
        <DisplayObjectData title="Interest " dataobj={profileobj.Interest} />
      </div>
    </div>
  );
};

export default Profile;
