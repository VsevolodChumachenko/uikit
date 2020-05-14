import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
class Button extends Vue {
  @Prop({ type: String, default: 'primary' }) theme;
  @Prop({ type: String, default: 'md' }) size;
  @Prop({ type: String, default: 'button' }) as;
  @Prop({ type: Boolean, default: false }) loading;
  @Prop({ type: Boolean, default: false }) disabled;
  @Prop({ type: Boolean, default: false }) block;
}

export default Button;
