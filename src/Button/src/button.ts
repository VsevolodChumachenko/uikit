import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
class Button extends Vue {
  @Prop({ type: String, default: 'primary' }) theme?: string;
  @Prop({ type: String, default: 'md' }) size?: string;
  @Prop({ type: String, default: 'button' }) as?: string;
  @Prop({ type: Boolean, default: false }) loading?: boolean;
  @Prop({ type: Boolean, default: false }) disabled?: boolean;
  @Prop({ type: Boolean, default: false }) block?: boolean;
}

export default Button;
