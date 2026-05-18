import Toc from '../components/Toc.jsx';

const TOC_ITEMS = [
  { id: 'inline-login-form', label: 'Horizontal Form / form-inline' },
  { id: 'text-areas', label: 'Text Areas' },
  { id: 'various-input-fields', label: 'Various Input Fields' },
  { id: 'checkboxes-and-radio', label: 'Checkboxes and Radio Buttons' },
  { id: 'dropdown-menus', label: 'Drop Down Menus' },
  { id: 'sizing-form-controls', label: 'Sizing Form Controls' },
  { id: 'help-blocks', label: 'Help Blocks' },
  { id: 'basic-input-groups', label: 'Basic Input Groups' },
  { id: 'different-size-input-groups', label: 'Different Size Input Groups' },
  { id: 'fancy-addons', label: 'Fancy Addons' },
  { id: 'disabled-and-readonly', label: 'Disabled and Read Only States' },
  { id: 'validation-states', label: 'Validation States' },
];

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
];

const zipField = {
  id: 'zip',
  label: 'Zip Code:',
  placeholder: 'Zip Code',
  inputMode: 'numeric',
  pattern: '^\\d{5}(-\\d{4})?$',
};

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

const menuOptions = ['pick one', 'one', 'two', 'three'];

const sizeInputs = [
  {
    id: 'textField1',
    className: 'form-control input-lg',
    label: 'Large text field',
  },
  {
    id: 'textField2',
    className: 'form-control input-sm',
    label: 'Small text field',
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
      <h3 id="inline-login-form">Horizontal Form / form-inline</h3>
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
      <h3 id="text-areas">Text Areas</h3>
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
      <h3 id="various-input-fields">Various Input Fields</h3>
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
      <h3 id="checkboxes-and-radio">Checkboxes and Radio Buttons</h3>
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

function DropdownMenus() {
  return (
    <section className="chapter-9-dropdown-menus">
      <h3 id="dropdown-menus">Drop Down Menus</h3>
      <div className="form-group">
        <label className="sr-only" htmlFor="dropdown">
          Dropdown menu
        </label>
        <select className="form-control" id="dropdown">
          {menuOptions.map(option => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <p>Here is one with a reset done for rounded corners in most browsers</p>

      <div className="form-group">
        <label className="sr-only" htmlFor="myMenu">
          Dropdown menu with reset corners
        </label>
        <select className="form-control" id="myMenu">
          {menuOptions.map(option => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
    </section>
  );
}

function SizingFormControls() {
  return (
    <section className="chapter-9-sizing-form-controls">
      <h3 id="sizing-form-controls">Sizing Form Controls</h3>

      {sizeInputs.map(input => (
        <div className="form-group" key={input.id}>
          <label className="sr-only" htmlFor={input.id}>
            {input.label}
          </label>
          <input className={input.className} id={input.id} type="text" />
        </div>
      ))}

      <div className="form-group form-group-lg">
        <label className="sr-only" htmlFor="textField3">
          Large form group text field
        </label>
        <input className="form-control" id="textField3" type="text" />
        <p>More Form Group implemented different using form-group-lg</p>
      </div>

      <div className="form-group form-group-sm">
        <label className="sr-only" htmlFor="textField4">
          Small form group text field
        </label>
        <input className="form-control" id="textField4" type="text" />
        <p>More Form Group implemented different using form-group-sm</p>
      </div>
    </section>
  );
}

function HelpBlocks() {
  return (
    <section className="chapter-9-help-blocks">
      <h3 id="help-blocks">Help Blocks</h3>
      <span className="help-block" id="helpfield">
        This text describes a form field.
      </span>
      <label className="sr-only" htmlFor="inputWithHelpBlock">
        Input with help block
      </label>
      <input
        aria-describedby="helpfield"
        className="form-control"
        id="inputWithHelpBlock"
        type="text"
      />
    </section>
  );
}

function BasicInputGroups() {
  return (
    <section className="chapter9-basic-input-groups">
      <h3 id="basic-input-groups">Basic Input Groups</h3>
      <p>Basic Input Groups</p>

      <form action="#" className="form-inline">
        <div className="form-group">
          <div className="input-group">
            <label className="sr-only" htmlFor="cost">
              Amount
            </label>
            <div className="input-group-addon">$</div>
            <input className="form-control" id="cost" type="number" required placeholder="Amount" />
            <div className="input-group-addon">.00</div>
          </div>
        </div>
      </form>
    </section>
  );
}

function UserAddon({ id, inputGroupClass = '' }) {
  return (
    <div className={`input-group${inputGroupClass}`}>
      <label className="sr-only" htmlFor={id}>
        Username
      </label>
      <span className="input-group-addon">
        <span aria-hidden="true" className="glyphicon glyphicon-user" />
      </span>
      <input className="form-control" id={id} type="text" required placeholder="Username" />
    </div>
  );
}

function DifferentSizeInputGroups() {
  return (
    <section className="chapter9-different-size-input-groups">
      <h3 id="different-size-input-groups">Different Size Input Groups</h3>
      <p>Different Size Input Groups</p>

      <div className="form-group">
        <UserAddon id="email3" inputGroupClass=" input-group-lg" />
      </div>

      <div className="form-group">
        <UserAddon id="email4" />
      </div>

      <div className="form-group">
        <UserAddon id="email5" inputGroupClass=" input-group-sm" />
      </div>
    </section>
  );
}

function FancyAddons() {
  return (
    <section className="chapter9-fancy-addons">
      <h3 id="fancy-addons">Fancy Addons</h3>
      <div className="row">
        <div className="col-lg-6">
          <div className="input-group">
            <span className="input-group-addon">
              <input id="other" type="checkbox" aria-label="Other" value="other" />
            </span>
            <input
              aria-label="Other Text"
              className="form-control"
              id="otherText"
              placeholder="other text"
              type="text"
            />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="input-group">
            <span className="input-group-addon">
              <input id="other2" type="radio" aria-label="Other 2" value="other2" />
            </span>
            <input
              aria-label="Other Text 2"
              className="form-control"
              id="otherText2"
              placeholder="other text"
              type="text"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function DisabledAndReadonlyStates() {
  return (
    <section className="chapter9-disabled-and-readonly-states">
      <h3 id="disabled-and-readonly">Disabled and Read Only States</h3>
      <p>Disabled and Read Only States</p>

      <div className="form-group">
        <label className="sr-only" htmlFor="textField5">
          Disabled text field
        </label>
        <input className="form-control" id="textField5" type="text" disabled />
      </div>

      <div className="form-group">
        <label className="sr-only" htmlFor="textField6">
          Read only text field
        </label>
        <input className="form-control" id="textField6" type="text" readOnly />
      </div>
    </section>
  );
}

function ValidationStates() {
  return (
    <section className="chapter9-validation-states">
      <h3 id="validation-states">Validation States</h3>
      <form>
        <div className="form-group has-success">
          <label htmlFor="textSuccess">Success</label>
          <input className="form-control" id="textSuccess" type="text" placeholder="Success" />
        </div>

        <div className="form-group has-warning">
          <label htmlFor="textWarning">Warning</label>
          <input className="form-control" id="textWarning" type="text" placeholder="Warning" />
        </div>

        <div className="form-group has-error">
          <label htmlFor="textError">Error</label>
          <input className="form-control" id="textError" type="text" placeholder="Error" />
          <span aria-hidden="true" className="glyphicon glyphicon-error form-control-feedback" />
        </div>

        <div className="form-group has-success has-feedback">
          <label htmlFor="textSuccess2">Success</label>
          <input className="form-control" id="textSuccess2" type="text" placeholder="Success" />
          <span
            aria-hidden="true"
            className="glyphicon glyphicon-ok form-control-feedback"
          />
        </div>
      </form>
    </section>
  );
}


export default function FormsPage() {
  return (
    <main className="container chapter-page chapter9-page">
      <style>{`
        #myMenu {
          -moz-border-radius: 0px;
          -webkit-border-radius: 0px;
          border-radius: 0px;
        }
        #formField:focus {
          border-color: #7B66E9;
          outline: 0;
          -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(170, 158, 232,0.5);
          box-shadow: inset 0 1px 1px rgba(0,0,0,0.75), 0 0 8px rgba(170,158,232,0.75);
        }
      `}</style>
      <section className="chapter9">
        <h1>Forms</h1>
        <Toc items={TOC_ITEMS} />

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

          <SelectInput {...contactSelectFields[0]} />
          <TextInput {...zipField} />
          <SelectInput {...contactSelectFields[1]} />

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
      <DropdownMenus />
      <SizingFormControls />
      <HelpBlocks />
      <BasicInputGroups />
      <DifferentSizeInputGroups />
      <FancyAddons />
      <DisabledAndReadonlyStates />
      <ValidationStates />
    </main>
  );
}
