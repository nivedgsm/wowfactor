'use client';

import { FormEvent, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Arrow from './Arrow';

type BookingModalProps = {
  onClose: () => void;
};

type FormData = {
  name: string;
  phone: string;
  service: string;
  consultation: string;
  date: string;
};

const initialForm: FormData = {
  name: '',
  phone: '',
  service: '',
  consultation: '',
  date: '',
};

export default function BookingModal({
  onClose,
}: BookingModalProps) {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  /*
   * Close modal with Escape
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  /*
   * Prevent background page from scrolling
   */
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  /*
   * Update form
   */
  const updateField = (
    field: keyof FormData,
    value: string
  ) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  /*
   * Submit
   */
  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setLoading(true);

    /*
     * Demo delay.
     *
     * Replace this with your API request later.
     */
    await new Promise((resolve) =>
      setTimeout(resolve, 900)
    );

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={onClose}
    >
      <motion.div
        className="booking-modal"
        initial={{
          opacity: 0,
          y: 35,
          scale: 0.98,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          y: 20,
          scale: 0.98,
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        onMouseDown={(event) =>
          event.stopPropagation()
        }
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
      >

        {/* =====================================================
            CLOSE
        ===================================================== */}

        <button
          type="button"
          className="booking-close"
          onClick={onClose}
          aria-label="Close booking form"
        >
          <span />
          <span />
        </button>


        <AnimatePresence mode="wait">

          {!submitted ? (

            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -10 }}
            >

              {/* =================================================
                  HEADER
              ================================================= */}

              <div className="booking-header">

                <div>
                  <span className="eyebrow">
                    YOUR JOURNEY STARTS HERE
                  </span>

                  <h2 id="booking-title">
                    Let&apos;s plan your
                    <br />
                    <em>WOW journey.</em>
                  </h2>
                </div>

                <div className="booking-number">
                  <span>BOOKING</span>
                  <strong>01</strong>
                </div>

              </div>


              {/* =================================================
                  INTRO
              ================================================= */}

              <p className="booking-intro">
                Tell us a little about what you&apos;re
                looking for and our team will help you
                find the right consultation.
              </p>


              {/* =================================================
                  FORM
              ================================================= */}

              <form
                className="booking-form"
                onSubmit={handleSubmit}
              >

                <div className="booking-fields">

                  {/* NAME */}

                  <label className="booking-field">
                    <span>
                      <small>01</small>
                      Full name
                    </span>

                    <input
                      type="text"
                      value={form.name}
                      onChange={(event) =>
                        updateField(
                          'name',
                          event.target.value
                        )
                      }
                      placeholder="Your name"
                      autoComplete="name"
                      required
                    />
                  </label>


                  {/* PHONE */}

                  <label className="booking-field">
                    <span>
                      <small>02</small>
                      Phone number
                    </span>

                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(event) =>
                        updateField(
                          'phone',
                          event.target.value
                        )
                      }
                      placeholder="+91 XXXXX XXXXX"
                      autoComplete="tel"
                      required
                    />
                  </label>


                  {/* SERVICE */}

                  <label className="booking-field">
                    <span>
                      <small>03</small>
                      What can we help with?
                    </span>

                    <select
                      value={form.service}
                      onChange={(event) =>
                        updateField(
                          'service',
                          event.target.value
                        )
                      }
                      required
                    >
                      <option value="" disabled>
                        Select a service
                      </option>

                      <option value="dermatology">
                        Skin / Dermatology
                      </option>

                      <option value="trichology">
                        Hair / Trichology
                      </option>

                      <option value="aesthetics">
                        Aesthetics / Cosmetology
                      </option>
                    </select>
                  </label>


                  {/* CONSULTATION */}

                  <label className="booking-field">
                    <span>
                      <small>04</small>
                      Consultation type
                    </span>

                    <select
                      value={form.consultation}
                      onChange={(event) =>
                        updateField(
                          'consultation',
                          event.target.value
                        )
                      }
                      required
                    >
                      <option value="" disabled>
                        Select consultation
                      </option>

                      <option value="clinic">
                        In-clinic consultation
                      </option>

                      <option value="video">
                        Video consultation
                      </option>
                    </select>
                  </label>


                  {/* DATE */}

                  <label className="booking-field booking-field-full">
                    <span>
                      <small>05</small>
                      Preferred date
                    </span>

                    <input
                      type="date"
                      value={form.date}
                      onChange={(event) =>
                        updateField(
                          'date',
                          event.target.value
                        )
                      }
                      required
                    />
                  </label>

                </div>


                {/* =================================================
                    ACTIONS
                ================================================= */}

                <div className="booking-actions">

                  <button
                    type="submit"
                    className="booking-submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="booking-spinner" />
                        Sending request...
                      </>
                    ) : (
                      <>
                        Request appointment
                        <Arrow />
                      </>
                    )}
                  </button>


                  <a
                    className="booking-whatsapp"
                    href="https://wa.me/919999999999"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>
                      Prefer WhatsApp?
                    </span>

                    <strong>
                      Chat with us ↗
                    </strong>
                  </a>

                </div>


                <p className="booking-fine-print">
                  Your details are used only to help
                  arrange your consultation. Appointment
                  availability will be confirmed by our team.
                </p>

              </form>

            </motion.div>

          ) : (

            /* =====================================================
               SUCCESS
            ===================================================== */

            <motion.div
              key="success"
              className="booking-success"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
            >

              <div className="success-symbol">
                <span>✓</span>
              </div>

              <span className="eyebrow">
                REQUEST RECEIVED
              </span>

              <h2>
                Thank you,
                <br />
                <em>{form.name || 'for reaching out'}.</em>
              </h2>

              <p>
                We&apos;ve received your consultation
                request. Our team will be in touch to
                confirm your appointment.
              </p>

              <div className="success-summary">

                <div>
                  <span>INTERESTED IN</span>
                  <strong>
                    {form.service || 'Consultation'}
                  </strong>
                </div>

                <div>
                  <span>CONSULTATION</span>
                  <strong>
                    {form.consultation || 'To be confirmed'}
                  </strong>
                </div>

              </div>

              <button
                type="button"
                className="success-close"
                onClick={onClose}
              >
                Back to website
                <Arrow />
              </button>

            </motion.div>

          )}

        </AnimatePresence>

      </motion.div>
    </motion.div>
  );
}