import { connect } from "react-redux";
import CategoriesGradient from "../../CategoriesGradient/CategoriesGradient";
import MakingHeader from "../../MakingHeader/MakingHeader";
import MakingOptions from "../../MakingOptions/MakingOptions";

const OptionsTemplate = (props) => {
  console.log(props)
  return (
    <>
      <h1 className="game__title page__title">{props.name}</h1>
      <CategoriesGradient
        currentGame={props.currentGame}
        categoriesList={props.categoriesList}
      />
      <div className="block-bg stage__wrapper">
        <MakingHeader title={props.TITLE} advantages={props.ADVANTAGES} />

        <MakingOptions
          positionList={props.POSITION_LIST}
          description={props.DESCRIPTION}
          isExtraOptions={props.IS_EXTRA_OPTIONS}
          extraOptions={props.EXTRA_OPTIONS}
          {...props}
        />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  categoriesList: state.games.currentGameServices.CATEGORIES,
});

export default connect(mapStateToProps)(OptionsTemplate);

// export default OptionsTemplate;
