import Image from 'next/image';

const SearchForm = () => {
  return (
    <form>
      <label>
        <Image src="/magnifying-glass.svg" className="absolute left-8" width={32} height={32} alt="Search icon" />
      </label>
    </form>
  );
};

export default SearchForm;
