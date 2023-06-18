'use client';

import { SearchButton, SearchManufacturer } from '@/features';
import { SearchModel } from '@/features/SearchModel/SearchModel';
import { useRouter } from 'next/navigation';

import React, { useState } from 'react';

export const Search = () => {
  const router = useRouter();

  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');

  const setActiveManufacturer = (manufacturer: string) => {
    setManufacturer(manufacturer);
  };
  const setActiveModel = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModel(e.target.value);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer.trim() === '' && model.trim() === '') {
      return alert('Please fill at least one of the fields');
    }

    updateSearchUrl(manufacturer.toLowerCase(), model.toLowerCase());
  };

  const updateSearchUrl = (manufacturer: string, model: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set('model', model);
    } else {
      searchParams.delete('model');
    }

    if (manufacturer) {
      searchParams.set('make', manufacturer);
    } else {
      searchParams.delete('make');
    }
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setActiveManufacturer}
        />
        <SearchButton overlayStyles={'sm:hidden'} />
      </div>
      <div className="searchbar__item">
        <SearchModel model={model} setActiveModel={setActiveModel} />
        <SearchButton overlayStyles={'sm:hidden'} />
      </div>
      <SearchButton overlayStyles={'max-sm:hidden'} />
    </form>
  );
};
