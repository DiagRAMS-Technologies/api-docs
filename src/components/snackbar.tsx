export default function Snackbar({ message, type }: { message: string, type: string }): JSX.Element {
    return (
      <div className={`snackbar ${type}`}>
        <p>{message}</p>
        <style jsx>{`
        .snackbar {
            padding: 16px;
            margin-bottom: 16px;
            border-radius: 4px;
            text-align: center;
        }

        .snackbar.confirmation{
            background-color: var(--strongSuccess);
        }

        .snackbar.error{
            background-color: var(--danger);
        }
      `}</style>
      </div>
    )
  }