import { useEffect } from "react";
import PropTypes from 'prop-types'

import { useManime } from "../hook/useManime";

import { CircleLoading } from "react-loadingg";

export const ManAnimeCard = ({ manAnime, context, dispatchManime }) => {
    
  const { loading, data, err } = useManime(manAnime.mal_id, context);
  

  useEffect(
      ()=> data && dispatchManime({type : context, payload : data.score})
  , [dispatchManime, data, context])

  return (
    <>
      {!loading ? (
        <div className="flex rounded overflow-hidden shadow-lg">
          <img className="w-40 object-cover" src={data.image_url} alt={data.title} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-custom-first mb-2 w-60">
              {data.title}
            </div>
            <p className="text-gray-700 text-base text-custom-second flex flex-col space-y-2">
              <span>
                Status :
                <span
                  className={`${
                    data.status.includes('Finished') ? 'text-blue-500' : data.status.includes('Hiatus') ? 'text-yellow-500' : 'text-green-500'}`}
                >
                  {data.status}
                </span>
              </span>
              <span>Rank : {data.rank}</span>
              <span>Mean Score : {data.score}</span>
            </p>
          </div>
        </div>
      ) : (
        <>
          {err ? (
            <p>A ocurrido un error {err}</p>
          ) : (
            <div>
              <CircleLoading
                color="#536DFE"
                style={{ positionAbsolute: "none", margin: "auto" }}
              />
            </div>
          )}
        </>
      )}
    </>
  );
};


ManAnimeCard.propTypes = {
  manAnime : PropTypes.object.isRequired,
  context : PropTypes.string.isRequired,
  dispatchManime : PropTypes.func.isRequired
}