import ClayAutocomplete from '@clayui/autocomplete';
//yarn add @clayui/autocomplete
import ClayForm from '@clayui/form';
export const SearchAutocomplete = () => {
    return (
        
      <ClayForm.Group>
        <br/>
        <h3 className='bg-dark text-white'>Search Auto Complete</h3>
        <label htmlFor="clay-autocomplete-1" id="clay-autocomplete-label-1">
          Numbers (one-five)
        </label>
        <ClayAutocomplete
          aria-labelledby="clay-autocomplete-label-1"
          id="clay-autocomplete-1"
          defaultItems={["one", "two", "three", "four", "five"]}
          messages={{
            loading: "Loading...",
            notFound: "No results found"
          }}
          placeholder="Enter a number from One to Five"
        >
          {item => (
            <ClayAutocomplete.Item key={item}>{item}</ClayAutocomplete.Item>
          )}
        </ClayAutocomplete>
      </ClayForm.Group>
    );
  };    