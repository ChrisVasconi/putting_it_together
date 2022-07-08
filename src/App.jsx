import UserCard from './components/propcomponent'
import './App.css';

function App() {
  return (
    <div className="App">
      <UserCard
        LastName="Vasconi"
        FirstName="Chris"
        Age={34}
        HairColor="Fstring salt and pepper"
      />
      <UserCard
        LastName="Hernandaz"
        FirstName="Josiah"
        Age={29} //intergers have to be in curlys
        HairColor="black"
      />
      <UserCard
        LastName="Santiago"
        FirstName="Juan"
        Age={24} //intergers have to be in curlys
        HairColor="Brown"
      />
      <UserCard
        LastName="Curylo"
        FirstName="Melissa"
        Age={26} //intergers have to be in curlys
        HairColor="Blonde"
      />
      <UserCard
        LastName="Perrone"
        FirstName="Winter"
        Age={26} //intergers have to be in curlys
        HairColor="Black"
      />
    </div>
  );
}
export default App;
