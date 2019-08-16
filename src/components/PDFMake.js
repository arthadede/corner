import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    minHeight: 400
  }
}));

const PDFMake = props => {
  const classes = useStyles();
  const previewEl = React.useRef(null);
  const { docDefinition } = props;

  const pdfDocGenerator = pdfMake.createPdf(docDefinition);

  React.useEffect(() => {
    pdfDocGenerator.getDataUrl(dataUrl => {
      previewEl.current.src = dataUrl;
    });
  }, [pdfDocGenerator]);

  return <iframe ref={previewEl} className={classes.root} />;
};

PDFMake.propTypes = {
  docDefinition: PropTypes.object
};

export default PDFMake;
