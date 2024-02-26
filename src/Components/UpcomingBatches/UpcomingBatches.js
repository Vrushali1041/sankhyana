import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCalendarCheck, } from "@fortawesome/free-solid-svg-icons";
import "./batches.css"

// Add the imported icon to the library

library.add(faCalendarCheck);

function UpcomingBatches() {
  return (
    <>
      <div class="container-fluid bg-gray-300" style={{ height: "500px" }}>
        <div class="row">
          <div class="col-4 p-3">
            <h2 className="mt-3 ml-5 text-primary fs-3 fw-bolder text-decoration-underline batches-head">
              Upcoming Batches
            </h2>
          </div>

          <div className="row batches-table">
            {/* margin auto */}
            <div class="col bg-light ml-5">

              <tr className="table-details">
                <td
                  className="col-4 p-2 whitespace-nowrap"
                  style={{ borderRight: "red" }}
                >
                  <div className="flex items-center row-details">
                    <div class="flex-shrink-0 mr-2 sm:mr-3">
                      <FontAwesomeIcon icon="calendar-check" />
                    </div>
                    <div class="font-medium text-gray-800">26-Feb-2024</div>
                  </div>
                </td>
                <td class="col-4 p-2 whitespace-nowrap">
                  <div class="text-left font-medium">Mon-Fri</div>
                  <p class="fst-italic text-yellow-600 text-color">Weekdays Regular</p>
                </td>
                <td class="col-4 p-2 whitespace-nowrap">
                  <div class="text-left font-medium ">
                    08:00 AM & 10:00 AM Batches
                  </div>
                  <p class="fst-italic text-yellow-600 text-color">
                    (Class 1Hr - 1:30Hrs) / Per Session
                  </p>
                </td>
                <td class="col-4 p-2 whitespace-nowrap">
                  {/* <div class="text-lg text-center"><button>Course Free</button></div> */}
                  <button type="button" className="btn btn-primary text-dark batches-btn ">
                    Course Free
                  </button>
                </td>
              </tr>
              <hr />

              <tr className="table-details" >
                <td
                  class="col-4 p-2 whitespace-nowrap"
                  style={{ borderRight: "red" }}
                >
                  <div class="flex items-center row-details">
                    <div class="flex-shrink-0 mr-2 sm:mr-3">
                      <FontAwesomeIcon icon="calendar-check" />
                    </div>
                    <div class="font-medium text-gray-800">26-Feb-2024</div>
                  </div>
                </td>
                <td class="col-4 p-2 whitespace-nowrap">
                  <div class="text-left font-medium">Mon-Fri</div>
                  <p class="fst-italic text-yellow-600 text-color">Weekdays Regular</p>
                </td>
                <td class="col-4 p-2 whitespace-nowrap">
                  <div class="text-left font-medium ">
                    08:00 AM & 10:00 AM Batches
                  </div>
                  <p class="fst-italic text-yellow-600 text-color">
                    (Class 1Hr - 1:30Hrs) / Per Session
                  </p>
                </td>
                <td class="col-4 p-2 whitespace-nowrap">
                  {/* <div class="text-lg text-center"><button>Course Free</button></div> */}
                  <button type="button" className="btn btn-primary text-dark batches-btn">
                    Course Free
                  </button>
                </td>
              </tr>
              <hr />

              <tr className="table-details">
                <td
                  class="col-4 p-2 whitespace-nowrap"
                  style={{ borderRight: "red" }}
                >
                  <div class="flex items-center row-details">
                    <div class="flex-shrink-0 mr-2 sm:mr-3">
                      <FontAwesomeIcon icon="calendar-check" />
                    </div>
                    <div class="font-medium text-gray-800">26-Feb-2024</div>
                  </div>
                </td>
                <td class="col-4 p-2 whitespace-nowrap">
                  <div class="text-left font-medium">Mon-Fri</div>
                  <p class="fst-italic text-yellow-600 text-color">Weekdays Regular</p>
                </td>
                <td class="col-4 p-2 whitespace-nowrap">
                  <div class="text-left font-medium ">
                    08:00 AM & 10:00 AM Batches
                  </div>
                  <p class="fst-italic text-yellow-600 text-color">
                    (Class 1Hr - 1:30Hrs) / Per Session
                  </p>
                </td>
                <td class="col-4 p-2 whitespace-nowrap">
                  {/* <div class="text-lg text-center"><button>Course Free</button></div> */}
                  <button type="button" className="btn btn-primary text-dark batches-btn">
                    Course Free
                  </button>
                </td>
              </tr>
              <hr />

              <tr className="table-details">
                <td
                  class="col-4 p-2 whitespace-nowrap"
                  style={{ borderRight: "red" }}
                >
                  <div class="flex items-center row-details">
                    <div class="flex-shrink-0 mr-2 sm:mr-3">
                      <FontAwesomeIcon icon="calendar-check" />
                    </div>
                    <div class="font-medium text-gray-800 ">26-Feb-2024</div>
                  </div>
                </td>
                <td class="col-4 p-2 whitespace-nowrap">
                  <div class="text-left font-medium">Mon-Fri</div>
                  <p class="fst-italic text-yellow-600 text-color">Weekdays Regular</p>
                </td>
                <td class="col-4 p-2 whitespace-nowrap">
                  <div class="text-left font-medium">
                    08:00 AM & 10:00 AM Batches
                  </div>
                  <p class="fst-italic text-yellow-600 text-color">
                    (Class 1Hr - 1:30Hrs) / Per Session
                  </p>
                </td>
                <td class="col-4 p-2 whitespace-nowrap">
                  {/* <div class="text-lg text-center"><button>Course Free</button></div> */}
                  <button type="button" className="btn btn-primary text-dark batches-btn" >
                    Course Free
                  </button>
                </td>
              </tr>
              <hr />

              <tr className="table-details">
                <td
                  class="col-4 p-2 whitespace-nowrap"
                  style={{ borderRight: "red" }}
                >
                  <div class="flex items-center row-details">
                    <div class="flex-shrink-0 mr-2 sm:mr-3">
                      <FontAwesomeIcon icon="calendar-check" />
                    </div>
                    <div class="font-medium text-gray-800 ">26-Feb-2024</div>
                  </div>
                </td>
                <td class="col-4 p-2 whitespace-nowrap">
                  <div class="text-left font-medium">Mon-Fri</div>
                  <p class="fst-italic text-yellow-600 text-color">Weekdays Regular</p>
                </td>
                <td class="col-4 p-2 whitespace-nowrap">
                  <div class="text-left font-medium text-color">
                    08:00 AM & 10:00 AM Batches
                  </div>
                  <p class="fst-italic text-yellow-600">
                    (Class 1Hr - 1:30Hrs) / Per Session
                  </p>
                </td>
                <td class="col-4 p-2 whitespace-nowrap">
                  {/* <div class="text-lg text-center"><button>Course Free</button></div> */}
                  <button type="button" className="btn btn-primary text-dark batches-btn">
                    Course Free
                  </button>
                </td>
              </tr>


              {/* <tr>
                <td
                  class="col-4 p-2 whitespace-nowrap"
                  style={{ borderRight: "1px solid red" }}
                >
                  <div class="flex items-center">
                    <div class="flex-shrink-0 mr-2 sm:mr-3">
                      <FontAwesomeIcon icon="calendar-check" />
                    </div>
                    <div class="font-medium text-gray-800">26-Feb-2024</div>
                  </div>
                </td>
                <td class="col-4 p-2 whitespace-nowrap">
                  <div class="text-left font-medium">Mon-Fri</div>
                  <p class="fst-italic text-yellow-600 ">Weekdays Regular</p>
                </td>
                <td class="col-4 p-2 whitespace-nowrap">
                  <div class="text-left font-medium">
                    08:00 AM & 10:00 AM Batches
                  </div>
                  <p class="fst-italic text-yellow-600">
                    (Class 1Hr - 1:30Hrs) / Per Session
                  </p>
                </td>
                <td class="col-4 p-2 whitespace-nowrap">
                <button type="button" class="btn btn-primary text-dark">
                    Course Free
                  </button>
                    
                </td>
              </tr> */}

            </div>


            {/* review */}
            {/* <div class="col-4 bg-primary"> dfcds</div> */}

          </div>
        </div>
      </div>
    </>
  );
}

export default UpcomingBatches;
