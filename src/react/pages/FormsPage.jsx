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

const contactTextFields = [
  {
    id: 'firstName',
    label: 'First Name:',
    placeholder: 'First Name',
    required: true,
    autoFocus: true,
  },
  {
    id: 'lastName',
    label: 'Last Name:',
    placeholder: 'Last Name',
    required: true,
  },
  {
    id: 'email',
    label: 'Email Address:',
    type: 'email',
    placeholder: 'Email Address',
    required: true,
  },
  {
    id: 'homePhone',
    label: 'Home Phone:',
    type: 'tel',
    placeholder: 'Home Phone',
    pattern: '^\\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}$',
  },
  {
    id: 'workPhone',
    label: 'Work Phone:',
    type: 'tel',
    placeholder: 'Work Phone',
    pattern: '^\\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}$',
  },
  {
    id: 'url',
    label: 'URL:',
    type: 'url',
    placeholder: 'URL',
  },
  {
    id: 'address1',
    label: 'Address:',
    placeholder: 'Address (line 1)',
  },
  {
    id: 'address2',
    label: 'Address (line 2):',
    placeholder: 'Address (line 2)',
  },
  {
    id: 'city',
    label: 'City:',
    placeholder: 'City',
  },
  {
    id: 'zip',
    label: 'Zip Code:',
    placeholder: 'Zip Code',
    inputMode: 'numeric',
    pattern: '^\\d{5}(-\\d{4})?$',
  },
];

const contactSelectFields = [
  {
    id: 'state',
    label: 'State:',
    options: states,
  },
  {
    id: 'country',
    label: 'Country:',
    options: countries,
    defaultValue: 'US',
  },
];

const inputFieldExamples = [
  { id: 'checkboxField', label: 'Checkbox Field', type: 'checkbox' },
  { id: 'colorField', label: 'Color Field', type: 'color', placeholder: 'Color Field', formControl: true },
  { id: 'dateField', label: 'Date Field', type: 'date', placeholder: 'Date Field', formControl: true },
  { id: 'dateTimeField', label: 'Date Time Field', type: 'datetime', placeholder: 'Date Time Field', formControl: true },
  {
    id: 'dateTimeFieldLocal',
    label: 'Date Time Field Local',
    type: 'datetime-local',
    placeholder: 'Date Time Field Local',
    formControl: true,
  },
  { id: 'emailField', label: 'Email Field', type: 'email', placeholder: 'Email Field', formControl: true },
  { id: 'monthField', label: 'Month Field', type: 'month', placeholder: 'Month Field', formControl: true },
  { id: 'numberField', label: 'Number Field', type: 'number', placeholder: 'Number Field', formControl: true },
  { id: 'passwordField', label: 'Password Field', type: 'password', placeholder: 'Password Field', formControl: true },
  { id: 'radioField1', label: 'Radio Field 1', type: 'radio', name: 'inputFieldRadioGroup' },
  { id: 'radioField2', label: 'Radio Field 2', type: 'radio', name: 'inputFieldRadioGroup' },
  { id: 'searchField', label: 'Search Field', type: 'search', placeholder: 'Search Field', formControl: true },
  { id: 'telField', label: 'Telephone Field', type: 'tel', placeholder: 'Telephone Field', formControl: true },
  { id: 'textField', label: 'Text Field', type: 'text', placeholder: 'Text Field', formControl: true },
  { id: 'timeField', label: 'Time Field', type: 'time', placeholder: 'Time Field', formControl: true },
  { id: 'urlField', label: 'URL Field', type: 'url', placeholder: 'URL Field', formControl: true },
  { id: 'weekField', label: 'Week Field', type: 'week', placeholder: 'Week Field', formControl: true },
  { id: 'rangeField', label: 'Range Field', type: 'range', placeholder: 'Range Field', formControl: true },
  { id: 'fileField', label: 'File Field', type: 'file', formControl: true },
];

const actionInputs = [
  { id: 'submitButton', value: 'Submit', type: 'submit', className: 'btn btn-primary' },
  { id: 'resetButton', value: 'Reset', type: 'reset', className: 'btn btn-secondary' },
  { id: 'buttonField', value: 'Button Field', type: 'button', className: 'btn btn-default' },
];

const stackedCheckboxes = [
  { id: 'checkbox1', label: 'Checkbox 1' },
  { id: 'checkbox2', label: 'Checkbox 2' },
  { id: 'checkbox3', label: 'Checkbox 3', disabled: true },
];

const radioButtons = [
  { id: 'radio1', label: 'Radio Button 1' },
  { id: 'radio2', label: 'Radio Button 2' },
  { id: 'radio3', label: 'Radio Button 3', disabled: true },
];

const inlineCheckboxes = [
  { id: 'checkbox1inline', label: 'Checkbox 1' },
  { id: 'checkbox2inline', label: 'Checkbox 2' },
  { id: 'checkbox3inline', label: 'Checkbox 3', disabled: true },
];

function TextInput({
  id,
  label,
  type = 'text',
  placeholder,
  required = false,
  pattern,
  autoFocus = false,
  inputMode,
}) {
  return (
    <div className="form-group">
      <label className="col-sm-3 control-label" htmlFor={id}>
        {label}
      </label>

      <div className="col-sm-9">
        <input
          className="form-control"
          id={id}
          type={type}
          placeholder={placeholder}
          required={required}
          pattern={pattern}
          autoFocus={autoFocus}
          inputMode={inputMode}
        />
      </div>
    </div>
  );
}

function SelectInput({ id, label, options, defaultValue }) {
  return (
    <div className="form-group">
      <label className="col-sm-3 control-label" htmlFor={id}>
        {label}
      </label>

      <div className="col-sm-9">
        <select className="form-control" id={id} defaultValue={defaultValue}>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

function InlineLoginForm() {
  return (
    <section className="chapter-9-horizontal-form">
      <p>This is a form that is horizontal using form-inline</p>

      <form action="#" className="form-inline">
        <div className="form-group">
          <label className="sr-only" htmlFor="loginEmail">
            Email Address
          </label>
          <input
            className="form-control"
            id="loginEmail"
            type="email"
            required
            placeholder="Email Address"
          />
        </div>

        <div className="form-group">
          <label className="sr-only" htmlFor="password">
            Password
          </label>
          <input
            className="form-control"
            id="password"
            type="password"
            required
            placeholder="Password"
          />
        </div>

        <div className="checkbox">
          <label htmlFor="rememberMe">
            <input id="rememberMe" type="checkbox" /> Remember me
          </label>
        </div>

        <button className="btn btn-default" type="submit">
          Login
        </button>
      </form>
    </section>
  );
}

function TextAreaExamples() {
  return (
    <section className="chapter-9-text-area">
      <p>This is a text area</p>

      <div className="form-group">
        <label className="sr-only" htmlFor="textAreaField">
          Text area field
        </label>
        <textarea className="form-control" id="textAreaField" rows="4" />
      </div>

      <div className="form-group">
        <label className="sr-only" htmlFor="textAreaFieldStatic">
          Static text area field
        </label>
        <textarea
          className="form-control-static"
          id="textAreaFieldStatic"
          rows="4"
          defaultValue="Non editable form control text area"
          readOnly
        />
      </div>

      <p className="form-control-static">Non editable form control text area</p>
    </section>
  );
}

function FieldExample({ field }) {
  const input = (
    <input
      className={field.formControl ? 'form-control' : undefined}
      id={field.id}
      name={field.name}
      type={field.type}
      placeholder={field.placeholder}
    />
  );

  if (field.type === 'checkbox' || field.type === 'radio') {
    return (
      <div className={field.type}>
        <label htmlFor={field.id}>
          {input} {field.label}
        </label>
      </div>
    );
  }

  return (
    <div className="form-group">
      <label htmlFor={field.id}>{field.label}</label>
      {input}
    </div>
  );
}

function VariousInputFields() {
  return (
    <section className="chapter-9-various-input-fields">
      <p>The various input fields</p>

      {inputFieldExamples.map(field => (
        <FieldExample key={field.id} field={field} />
      ))}

      <input id="hiddenField" type="hidden" defaultValue="Hidden Field" />

      <div className="form-group">
        {actionInputs.map(input => (
          <input
            className={input.className}
            id={input.id}
            key={input.id}
            type={input.type}
            defaultValue={input.value}
          />
        ))}
      </div>
    </section>
  );
}

function CheckOption({ option, type, name, inline = false }) {
  const wrapperClass = inline
    ? `${type}-inline${option.disabled ? ' disabled' : ''}`
    : `${type}${option.disabled ? ' disabled' : ''}`;

  return (
    <div className={wrapperClass}>
      <label htmlFor={option.id}>
        <input
          disabled={option.disabled}
          id={option.id}
          name={name}
          type={type}
        />{' '}
        {option.label}
      </label>
    </div>
  );
}

function CheckboxAndRadioExamples() {
  return (
    <section className="chapter-9-checkboxes-and-radio-buttons">
      <p>Checkboxes and Radio Buttons</p>

      {stackedCheckboxes.map(option => (
        <CheckOption key={option.id} option={option} type="checkbox" />
      ))}

      {radioButtons.map(option => (
        <CheckOption
          key={option.id}
          name="radioButtonGroup"
          option={option}
          type="radio"
        />
      ))}

      {inlineCheckboxes.map(option => (
        <CheckOption key={option.id} option={option} type="checkbox" inline />
      ))}

      <div className="checkbox">
        <input
          id="checkbox1nolabel"
          type="checkbox"
          value="value"
          aria-label="Label for assistive devices"
        />
      </div>
    </section>
  );
}

export default function FormsPage() {
  return (
    <main className="container chapter-page chapter9-page">
      <section className="chapter9">
        <h1>Forms</h1>

        <p>
          HTML forms are used to collect user input. They can include various types of input fields,
          such as text boxes, radio buttons, checkboxes, and dropdown lists. Forms also support
          validation to ensure that the data entered by the user meets certain criteria before it is
          submitted.
        </p>

        <form action="#" className="form-horizontal">
          {contactTextFields.map(field => (
            <TextInput key={field.id} {...field} />
          ))}

          {contactSelectFields.map(field => (
            <SelectInput key={field.id} {...field} />
          ))}

          <div className="form-group">
            <div className="col-sm-offset-3 col-sm-9">
              <button className="btn btn-primary" type="submit">
                Contact
              </button>
            </div>
          </div>
        </form>
      </section>

      <InlineLoginForm />
      <TextAreaExamples />
      <VariousInputFields />
      <CheckboxAndRadioExamples />
    </main>
  );
}
