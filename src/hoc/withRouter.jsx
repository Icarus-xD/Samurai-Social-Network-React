import { useLocation, useNavigate, useParams } from 'react-router-dom';

const withRouter = Component => {
  const ComponentWithRouter = props => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return (
      <Component {...props} router={{location, navigate, params}} />
    );
  };
  return ComponentWithRouter;
};

export default withRouter;