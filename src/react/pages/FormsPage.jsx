const states = [
  { value: 'AL', label: 'Alabama' },
  { value: 'AK', label: 'Alaska' },
  { value: 'AZ', label: 'Arizona' },
];

const countries = [
  { value: 'US', label: 'United States' },
  { value: 'CA', label: 'Canada' },
  { value: 'MX', label: 'Mexico' },
];

export default function FormsPage() {
  return (
    <main className="container chapter-page chapter9-page">
      <h1>Forms</h1>
      <p>
        HTML forms are used to collect user input. They can include various types of input fields,
        such as text boxes, radio buttons, checkboxes, and dropdown lists. Forms also support
        validation to ensure that the data entered by the user meets certain criteria before it is
        submitted.
      </p>

      <form action="#" className="chapter9-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input className="form-control" type="text" autoFocus required id="firstName" placeholder="First Name" />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input className="form-control" type="text" required id="lastName" placeholder="Last Name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input className="form-control" type="email" required id="email" placeholder="Email Address" />
        </div>

        <div className="form-group">
          <label htmlFor="homePhone">Home Phone:</label>
          <input
            className="form-control"
            type="tel"
            id="homePhone"
            placeholder="Home Phone"
            pattern="^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$"
          />
        </div>

        <div className="form-group">
          <label htmlFor="workPhone">Work Phone:</label>
          <input
            className="form-control"
            type="tel"
            id="workPhone"
            placeholder="Work Phone"
            pattern="^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$"
          />
        </div>

        <div className="form-group">
          <label htmlFor="url">URL:</label>
          <input className="form-control" type="url" id="url" placeholder="URL" />
        </div>

        <div className="form-group">
          <label htmlFor="address1">Address:</label>
          <input className="form-control" type="text" id="address1" placeholder="Address (line 1)" />
        </div>

        <div className="form-group">
          <label htmlFor="address2">Address (line 2):</label>
          <input className="form-control" type="text" id="address2" placeholder="Address (line 2)" />
        </div>

        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input className="form-control" type="text" id="city" placeholder="City" />
        </div>

        <div className="form-group">
          <label htmlFor="state">State:</label>
          <select className="form-control" id="state" defaultValue="">
            <option value="" disabled>Choose a state</option>
            {states.map(state => (
              <option value={state.value} key={state.value}>{state.label}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="zip">Zip Code:</label>
          <input
            className="form-control"
            type="text"
            inputMode="numeric"
            id="zip"
            placeholder="Zip Code"
            pattern="^\d{5}(-\d{4})?$"
          />
        </div>

        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <select className="form-control" id="country" defaultValue="US">
            {countries.map(country => (
              <option value={country.value} key={country.value}>{country.label}</option>
            ))}
          </select>
        </div>

        <button className="btn btn-primary" type="submit">Contact</button>
      </form>
    </main>
  );
}
