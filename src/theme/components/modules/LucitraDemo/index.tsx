import React from 'react';
import { ModuleFields, TextField } from '@hubspot/cms-components/fields';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
// Import everything to see what's available
import * as Lucitra from '@lucitra/react-components';

export const Component = ({ fieldValues, hublParameters }) => {
  const [textValue, setTextValue] = React.useState('');

  // Log available exports to see what's actually available
  console.log('Lucitra exports:', Object.keys(Lucitra));

  return (
    <MantineProvider theme={{ colorScheme: 'light' }}>
      <div style={{ padding: '2rem' }}>
        <h2>Lucitra React Components Demo</h2>
        
        {/* Basic Components */}
        <div style={{ marginBottom: '2rem' }}>
          <h3>Buttons</h3>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <Lucitra.Button>Default Button</Lucitra.Button>
            {Lucitra.BaseButton && <Lucitra.BaseButton>Base Button</Lucitra.BaseButton>}
          </div>
        </div>

        {/* Form Components */}
        <div style={{ marginBottom: '2rem' }}>
          <h3>Form Elements</h3>
          {Lucitra.Input && (
            <div style={{ marginBottom: '1rem' }}>
              <Lucitra.Input
                label="Text Input"
                placeholder="Enter text"
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
              />
            </div>
          )}
          {Lucitra.Checkbox && <Lucitra.Checkbox label="Checkbox option" />}
        </div>

        {/* Display Components */}
        <div style={{ marginBottom: '2rem' }}>
          <h3>Display Components</h3>
          {Lucitra.Badge && (
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
              <Lucitra.Badge>Default Badge</Lucitra.Badge>
              {Lucitra.StatusBadge && <Lucitra.StatusBadge status="active" />}
              {Lucitra.CountBadge && <Lucitra.CountBadge count={5} />}
            </div>
          )}
          {Lucitra.Alert && (
            <Lucitra.Alert>
              This is an alert message
            </Lucitra.Alert>
          )}
        </div>

        {/* Text Components */}
        <div style={{ marginBottom: '2rem' }}>
          <h3>Typography</h3>
          {Lucitra.Text && <Lucitra.Text>Regular text component</Lucitra.Text>}
          {Lucitra.Code && <Lucitra.Code>const code = true;</Lucitra.Code>}
        </div>

        <p style={{ marginTop: '2rem', color: '#666' }}>
          Module configuration: {fieldValues.demo_text || 'No text provided'}
        </p>
      </div>
    </MantineProvider>
  );
};

export const fields = (
  <ModuleFields>
    <TextField
      name="demo_text"
      label="Demo Text"
      default="This module demonstrates Lucitra React Components"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Lucitra Components Demo'
};