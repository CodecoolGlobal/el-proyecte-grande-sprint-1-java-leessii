import {
  FormGroup,
} from '@mui/material'
import {useDropzone} from 'react-dropzone'
import React, {useState} from 'react'
import SaveButtonCom from '../SaveButtonCom/SaveButtonCom'

function UploadImageCom({onImageUpload}) {
  const [files, setFiles] = useState([])

  const onDrop = React.useCallback((acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
    console.log(acceptedFiles)
    onImageUpload(acceptedFiles);
  }, [onImageUpload]);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({onDrop})

  return (
    <FormGroup
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        height: '100%',
        border: '2px dashed',
        borderColor: 'secondary.main',
        position: 'relative',
      }}
    >
      <div style={{position: 'relative', width: '100%', height: '100%'}}>
        {files.map(f => (
          <div
            key={f.name}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '2px',
              overflow: 'hidden',
            }}
          >
            <img src={f.preview} style={{objectFit: 'cover', width: '100%', height: '100%'}}/>
          </div>
        ))}
        <div
          {...getRootProps()}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className="text-center text-xl">Drop your media files here</p>
          ) : (
            <p className="text-center text-xl">
              Drag and drop some files here, or click to select filess
            </p>
          )}
        </div>
      </div>
    </FormGroup>
  )
}

export default UploadImageCom



