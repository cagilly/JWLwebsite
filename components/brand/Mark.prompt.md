The JWL mark: initials set on a ticked measuring rule, brass through the centre span — use for headers, covers, stamps and favicons.

```jsx
<Mark variant="default" />
<Mark variant="reversed" />       // on ink-navy grounds
<Mark variant="contained" ticks={9} /> // covers, stamps, signage
<Mark variant="favicon" />        // 40px chip, grotesque, no descriptor
```

Never crop the descriptor from `default`/`reversed`/`contained` in a real lock-up context (nav bars may omit it for space, but that is a deliberate exception, not the default). The rule is also exported standalone as `<Rule />` for use as a divider/hover-indicator elsewhere.
