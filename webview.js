<html lang="en">

<head>
  <title>React Example</title>
  <meta name="viewport" content="user-scalable=no, width=device-width">
  <script type="application/javascript">
    function getContext() {
      const hash = window.location.hash.slice(1)
      if (!hash) {
        // fallback for local development
        return { contextProps: { formData: { loyalty_id: '1234567890' } } }
      }
      return JSON.parse(atob(decodeURIComponent(hash)))
    }

    const context = getContext()
  </script>

  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

  <style>
    label,
    input {
      display: block;
    }
  </style>
</head>

<body>
  <div id="extended-attributes"></div>

  <script type="text/babel">
    if (context && context.contextProps) {
      const domContainer = document.querySelector('#extended-attributes');
      const root = ReactDOM.createRoot(domContainer);
      const translation = {
        loyalty_id: 'Loyalty ID'
      }

      const LabelledInput = function (props) {
        return (
          <label>
            {props.name}
            <input type="text" name={props.name} value={props.value} onChange={() => null} />
          </label>
        )
      }

      const Form = () => {
        return Object.entries(context.contextProps.formData).map(([name, value]) => (
          <LabelledInput key={name} name={translation[name] || name} value={value} />
        ))
      }

      root.render(<Form />);
    }
  </script>
</body>

</html>
