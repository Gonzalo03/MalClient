import { ManAnimeCard } from "./ManAnimeCard";

export const ListCardManime = ({ manAnimes, context, dispatchManime }) => {
  return (
    <>
      <p className="text-center text-xl text-white">
        <span className="bg-primary p-2 rounded-xl">
          {context[0].toUpperCase() + context.substring(1)} Favorites
        </span>
      </p>
      <ul className="flex flex-wrap justify-center space-y-6 my-8">
        {manAnimes.map(
          (manAnime, index) =>
            index <= 1 && (
              <ManAnimeCard
                manAnime={manAnime}
                key={manAnime.mal_id}
                context={context}
                dispatchManime={dispatchManime}
              />
            )
        )}
      </ul>
    </>
  );
};
