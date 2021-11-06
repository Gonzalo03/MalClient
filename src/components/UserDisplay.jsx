import { useRef, useEffect, useReducer } from "react";


import { useUser } from "../hook/useUser";
import { useManganimeMemo } from "../hook/useManganimeMemo";
import { avgReducer } from "../reducer/avgReducer";



import { CircleLoading } from "react-loadingg";
import { MenuStats } from "./MenuStats";
import { ListCardManime } from "./ListCardManime";

export const UserDisplay = ({ tag, deleteUser }) => {
  const { loading, data, err } = useUser(tag);

  const [avgManime, dispatchManime] = useReducer(avgReducer, {
    anime : [],
    manga : []
  });

  const computeAvgAnime = useManganimeMemo(avgManime.anime) || 0;
  const computeAvgManga = useManganimeMemo(avgManime.manga) || 0;

  const loadingRef = useRef();
  const aboutRef = useRef();

  useEffect(() => {
    loadingRef.current &&
      loadingRef.current.scrollIntoView({ behavior: "smooth" });

    if (aboutRef.current && data) {
      aboutRef.current.innerHTML = data.about || "";

      setTimeout(() => {
        aboutRef && aboutRef.current.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [tag, data]);



  return (
    <>
      {!loading && !err ? (
        <>
          <div className="md:grid grid-cols-2 my-5 userDisplay">
            {/* Profile Preview */}
            <div className="max-w-sm flex flex-col items-center justify-center rounded shadow-lg mx-auto">
              <img src={data.image_url} alt={tag} style={{ width: 300 }} />
              <div className="flex flex-col space-y-5 px-6 pt-4">
                <div className="font-bold text-xl mb-2">{tag}</div>
                <p
                  className="text-icon text-base overflow-hidden space-y-4"
                  ref={aboutRef}
                  style={{ width: 300 }}
                ></p>
                {computeAvgAnime &&<p
                    className={`text-${
                      computeAvgAnime > 7
                        ? "green"
                        : computeAvgAnime < 7 && computeAvgAnime > 4
                        ? "yellow"
                        : computeAvgAnime < 4
                        ? "red"
                        : ""
                    }-500`}
                  >
                    Anime score : {computeAvgAnime} ={">"}{" "}
                    {computeAvgAnime > 7
                      ? "GOD"
                      : computeAvgAnime < 7 && computeAvgAnime > 4
                      ? "Neutral"
                      : computeAvgAnime < 4
                      ? "ZZZZZZ"
                      : ""}
                  </p>}
                {computeAvgManga && (
                  <p
                    className={`text-${
                      computeAvgManga > 7
                        ? "green"
                        : computeAvgManga < 7 && computeAvgManga > 4
                        ? "yellow"
                        : computeAvgManga < 4
                        ? "red"
                        : ""
                    }-500`}
                  >
                    Manga score : {computeAvgManga} ={">"}{" "}
                    {computeAvgManga > 7
                      ? "GOD"
                      : computeAvgManga < 7 && computeAvgManga > 4
                      ? "Neutral"
                      : computeAvgManga < 4
                      ? "ZZZZZZ"
                      : ""}
                  </p>
                )}
              </div>
              <button
                className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded-full my-5"
                onClick={() => deleteUser(tag)}
              >
                Remover
              </button>
            </div>

            {/* Stats Preview */}

            <div className="flex flex-col space-y-7 self-center mt-10">
              <MenuStats stats={data.anime_stats} />
              <MenuStats stats={data.manga_stats} />
            </div>
          </div>

          {/* Fvorites Preview */}

          <div className="mt-10">
            <ListCardManime
              manAnimes={data.favorites.anime}
              context="anime"
              dispatchManime={dispatchManime}
            />
            <ListCardManime
              manAnimes={data.favorites.manga}
              context="manga"
              dispatchManime={dispatchManime}
            />
          </div>
        </>
      ) : (
        <>
          {err ? (
            <p>A ocurrido un error {err}</p>
          ) : (
            <div ref={loadingRef}>
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
