import { useState,useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom/dist";
const EditProfile = () => {
    const [namaDepan, setNamaDepan] = useState("");
    const [namaBelakang, setNamaBelakang] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [jenisKelamin, setJenisKelamin] = useState("Laki-laki");
    const [noHp, setNoHp] = useState("");
    const [alamat, setAlamat] = useState("");
    const navigation = useNavigate()
    const [user, setUser] = useState('');
    

  useEffect(()=>{
    getUserById()
    fetchData()
  },[])
    const token = localStorage.getItem("token")


    axios.interceptors.request.use(
      config => {
          config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
          return config;
      },
      error => {
          return Promise.reject(error);
      }
  )
  
  const fetchData = useCallback(async () => {
      try {
          const result = await axios.get('https://voluntegreen.onrender.com/userprofile')
          // setUser(result.data.data);
      }catch (err){
          console.log(err)
      }
  })


    const handleNamaDepan = (e) => {
      setNamaDepan(e.target.value);
    };
    const handleNamaBelakang = (e) => {
      setNamaBelakang(e.target.value);
    };
    const handleEmail = (e) => {
      setEmail(e.target.value);
    };
    const handlePassword = (e) => {
      setPassword(e.target.value);
    };
    const handleJenisKelamin = (e) => {
      setJenisKelamin(e.target.value);
    };
    const handleNoHp = (e) => {
      setNoHp(e.target.value);
    };
    const handleAlamat = (e) => {
      setAlamat(e.target.value);
    };
    const {id} =useParams()
    console.log(id)
    const handleEdit = (e) => {
      e.preventDefault();
      axios
        .get ("https://voluntegreen.onrender.com/userprofile")
        
        .then((result) => {

          console.log(result);
          console.log(id);
          if (result.data.data.id === id) {
            axios.get(`https://voluntegreen.onrender.com/userprofile`, {
              namaDepan: namaDepan,
              namaBelakang: namaBelakang,
              email: email,
              password: password,
              jenisKelamin: jenisKelamin,
              noTelepon: noHp,
              alamat: alamat,
            });
          }
  
          
        });
    };
    const getUserById = async()=>{
      axios
        .get ("https://voluntegreen.onrender.com/userprofile")
        
        .then((result) => {
          if (result.data.data === "63890eca981b2d81ad680aea") {
            axios.get("https://voluntegreen.onrender.com/userprofile", {
              namaDepan: namaDepan,
              namaBelakang: namaBelakang,
              email: email,
              password: password,
              jenisKelamin: jenisKelamin,
              noHp: noHp,
              alamat: alamat,
            });
          }
          console.log(result.data.data);
        });
      

          // console.log(result);
          console.log(id);
      }
      // const response = await axios.get(`https://voluntegreen.onrender.com/userprofile`);
      // setNamaDepan(response.data.namaDepan);
      // setNamaBelakang(response.data.namaBelakang);
      // setEmail(response.data.email);
      // setPassword(response.data.password);
      // setJenisKelamin(response.data.jenisKelamin);
      // setNoHp(response.data.noHp);
      // setAlamat(response.data.alamat);

    
    return (
      <>
        <section className="bg-EditProfile">
          <div className="form-profile">
            <div>
              <h2>
                Hello, {namaDepan} {namaBelakang}
              </h2>
            </div>
            <div className="col">
              <form id="form">
                <div className="row justify-content-center">
                  <div className="col">
                    <label className="form-label">Nama Depan</label>
                    <input
                      type="text"
                      className="form-control input-profile"
                      value={namaDepan}
                      onChange={handleNamaDepan}
                    />
                  </div>
  
                  <div className="col">
                    <label className="form-label">Nama Belakang</label>
                    <input
                      type="text"
                      className="form-control input-profile"
                      value={namaBelakang}
                      onChange={handleNamaBelakang}
                    />
                  </div>
                </div>
  
                <div className="row justify-content-center">
                  <div className="col">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control input-profile"
                      value={email}
                      onChange={handleEmail}
                    />
                  </div>
  
                  <div className="col">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control input-profile"
                      id="password-login"
                      value={password}
                      onChange={handlePassword}
                    />
                  </div>
                </div>
  
                <div className="row justify-content-center">
                  <div className="col">
                    <label className="form-label">Nomor Telepon(HP)</label>
                    <input
                      type="number"
                      className="form-control input-profile"
                      value={noHp}
                      onChange={handleNoHp}
                    />
                  </div>
                  <div className="col">
                    <label className="form-label">Jenis Kelamin</label>
                    <select className="jk" value={jenisKelamin} onChange={handleJenisKelamin}>
                      <option value="Laki-laki">Laki-laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
                  </div>
                </div>
  
                <div className="col">
                  <label className="form-label">Alamat</label>
                  <input
                    type="text"
                    className="form-control input-profile"
                    value={alamat}
                    onChange={handleAlamat}
                  />
                </div>

                <div className="text-center d-grid gap-2">
                  <br />
                  <button
                    type="submit"
                    className="btn btn-success"
                    // onClick={handleEdit}
                  >
                    Cancel
                  </button>
                </div>

                <div className="text-center d-grid gap-2">
                  <br />
                  <button
                    type="submit"
                    className="btn btn-success"
                    onClick={handleEdit}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </>
    );
  };
export default EditProfile
