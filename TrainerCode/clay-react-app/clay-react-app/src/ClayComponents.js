import ClayButton from '@clayui/button';
import React,{useState} from 'react'
//yarn add @clayui/button
//yarn add @clayui/form
import ClayForm, {ClayInput} from '@clayui/form';

//yarn add @clayui/loading-indicator
import ClayLoadingIndicator from '@clayui/loading-indicator';
//yarn add @clayui/alert
import ClayAlert from '@clayui/alert';
//yarn add @clayui/date-picker
import ClayDatePicker from '@clayui/date-picker';
import { ClayChartDemo } from './ClayChartDemo';
import { SearchAutocomplete } from './SearchAutoComplete';
import ClayIcon from '@clayui/icon';
const MyComponent=()=>{  

     return (
        <div className="App">
          <h1>Hello Murthy</h1>
    
          <ClayAlert displayType="info"  title="Welcome to Clay">
            {"Add some clay components to see the magic happen!"}
          </ClayAlert>
        </div>
      );
    }


export const ClayComponents = () => {
    const [value, setValue] = useState(null);
	return (
		<>
       <MyComponent/>        

			<ClayButton displayType="primary">
				Button Primary
			</ClayButton>
			<ClayButton displayType="secondary">
				Button Secondary
			</ClayButton>
			<ClayButton displayType={null}>
				Base Button
			</ClayButton>
			<ClayButton displayType="link">
				Button Link
			</ClayButton>
            
      <SearchAutocomplete/>
			
    <ClayForm.Group>
      <label htmlFor="basicInputText">Name</label>
      <h3>Login Form</h3>
      <ClayInput
        id="basicInputText"
        placeholder="username"
        type="text"
      />
      <br/>
      <ClayInput
        id="basicInputText"
        placeholder="Enter password"
        type="password"
      />
      <ClayButton displayType="primary">
				Login
			</ClayButton>
        <ClayLoadingIndicator displayType="secondary" size="sm" />
    </ClayForm.Group>

    <ClayAlert displayType="info" title="Info">
				This is an info message.
			</ClayAlert>

			<ClayAlert displayType="secondary"  title="Secondary">
				This is a secondary message.
			</ClayAlert>

			<ClayAlert displayType="success" title="Success">
				This is a success message.
			</ClayAlert>

			<ClayAlert displayType="warning"  title="Warning">
				This is a warning message.
			</ClayAlert>

			<ClayAlert displayType="danger"  title="Danger">
				This is a danger message.
	</ClayAlert>
    <ClayDatePicker
      onChange={setValue}
      placeholder="YYYY-MM-DD"
   
      value={value}
      years={{
        end: 2024,
        start: 1997
      }}
    />

    <ClayChartDemo/>

    <div class="alert alert-dismissible alert-danger" role="alert">
	<span class="alert-indicator"> ... </span>
	<strong class="lead">Error:</strong> This is an error message
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
      x
	</button>
</div>

<div class="alert alert-dismissible alert-info" role="alert">
	<span class="alert-indicator"> ... </span>
	<strong class="lead">Info:</strong> This is an info message.
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		x
	</button>
</div>

<div class="alert alert-dismissible alert-success" role="alert">
	<span class="alert-indicator"> ... </span>
	<strong class="lead">Success:</strong> This is a success message
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		x
	</button>
</div>

<div class="alert alert-dismissible alert-warning" role="alert">
	<span class="alert-indicator"> ... </span>
	<strong class="lead">Warning:</strong> This is a warning message.
	<button aria-label="Close" class="close" data-dismiss="alert" type="button">
		x
	</button>
</div>
</>
 );
    }
